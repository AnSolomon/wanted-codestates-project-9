import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../axios";

export const searchResultRequest = createAsyncThunk(
  "requestUserInfo",
  async (searchInput) => {
    let getLocalStorage = JSON.parse(localStorage.getItem("searchUserList"));
    let checkCache = "";

    if (getLocalStorage) {
      checkCache = getLocalStorage.filter((elem) => {
        return elem.nickName === searchInput;
      });
    } else {
      getLocalStorage = [];
    }

    if (checkCache.length !== 0) {
      const response = await api.get(
        `/kart/v1.0/users/${checkCache[0].accessId}/matches?start_date=&end_date= &offset=0&limit=200&match_types=`
      );

      response.data["level"] = checkCache[0].level;

      return response.data;
    } else {
      const getUserResponse = await api.get(
        `/kart/v1.0/users/nickname/${searchInput}`
      );
      const object = {
        accessId: getUserResponse.data.accessId,
        nickName: getUserResponse.data.name,
        level: getUserResponse.data.level,
      };
      getLocalStorage.push(object);
      if(getLocalStorage.length > 5){
        getLocalStorage = getLocalStorage.slice(-5);
      }

      localStorage.setItem("searchUserList", JSON.stringify(getLocalStorage));

      const response = await api.get(
        `/kart/v1.0/users/${getUserResponse.data.accessId}/matches?start_date=&end_date= &offset=0&limit=200&match_types=`
      );

      response.data["level"] = getUserResponse.data.level;

      return response.data;
    }
  }
);

export const userInfoSlice = createSlice({
  name: "requestUserInfo",
  initialState: { data: [] },
  reducers: {
    initialData: (state) => {
      state.data = [];
    }
  },
  extraReducers: {
    [searchResultRequest.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
  },
});


export const { initialData } = userInfoSlice.actions;
export default userInfoSlice.reducer;
