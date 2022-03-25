import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../axios";

export const getIndiRankDataRequest = createAsyncThunk(
  "requestRankData",
  async (startDate, endDate) => {
    const getMatchListResponse = await api.get(
      `/kart/v1.0/matches/all?start_date=${startDate}&end_date=${endDate}&offset=0&limit=200&match_types=7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a`
    );

    // 속도도 느리고 429 Error가 발생하지 않는 것도 아님.
    // for(const match of getMatchListResponse.data.matches[0].matches){
    //     const getMatchInforesponse = await api.get(`/kart/v1.0/matches/${match}`);
    //     console.log(getMatchInforesponse.data);
    // }

    // 속도는 상대적으로 빠르지만 간헐적 429 Error
    // const matches = await Promise.all(
    //   getMatchListResponse.data.matches[0].matches.map(async (elem) => {
    //     const getMatchInforesponse = await api.get(
    //       `/kart/v1.0/matches/${elem}`
    //     );
    //     console.log(getMatchInforesponse.data);
    //     return getMatchInforesponse.data;
    //   })
    // );

    // console.log(matches);
  }
);
export const getTeamRankDataRequest = createAsyncThunk(
  "requestRankData",
  async (startDate, endDate) => {
    const getMatchListResponse = await api.get(
      `/kart/v1.0/matches/all?start_date=${startDate}&end_date=${endDate}&offset=0&limit=200&match_types=effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e`
    );

    getMatchListResponse.data.matches[0].matches.map(() => {});
  }
);

export const rankDataSlice = createSlice({
  name: "requestRankData",
  initialState: { data: [] },
  reducers: {
    initialData: (state) => {
      state.data = [];
    },
  },
  extraReducers: {
    [getIndiRankDataRequest.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
    [getTeamRankDataRequest.fulfilled]: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { initialData } = rankDataSlice.actions;
export default rankDataSlice.reducer;
