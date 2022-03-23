import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import {
  Wrap,
  ContentMain,
  LeftImg,
  RightImg,
  HomeTitle,
  MainMessage,
  MainContent,
  MainCopy,
  SearchForm,
  SelectDiv,
  SearchLable,
  SearchInputDiv,
  SearchInput,
  SearchButton,
  AutoSearchModal,
  AutoSearchContent,
  SelectTypeModal,
  SelectOption,
} from "./HomePage.style";

const HomePage = () => {
  const [selectType, setSelectType] = useState(0);
  const [isAutoSearchModal, setIsAutoSearchModal] = useState(false);
  const [isSelectTypeModal, setIsSelectTypeModalModal] = useState(false);
  const [searchUserHistory, setSearchUserHistory] = useState([]);



  const searchUserNickname = useRef(null);

  const moveSearchUser = useNavigate();

  const selectTypeList = [
    { name: "유저", placeholder: "카트라이더 닉네임을 입력" },
    { name: "카트", placeholder: "카트바디 이름을 입력" },
    { name: "트랙", placeholder: "트랙 이름을 입력" },
  ];

  const setChangeType = (typeIndex) => {
    setSelectType(typeIndex);
    setIsSelectTypeModalModal(false);
  };

  const handleSelectTypeModal = () => {
    setIsSelectTypeModalModal((isSelectTypeModal) => !isSelectTypeModal);
  };

  const handleAutoSearchModal = () => {
    setIsAutoSearchModal((isAutoSearchModal) => !isAutoSearchModal);
  };

  const searchUserBtnClick = () => {
    if (searchUserNickname.current.value) {
      moveSearchUser(`/user?nick=${searchUserNickname.current.value}&matchType=indi`);
    }
  };

  useEffect(() => {
    const getSearchUserHistory = localStorage.getItem("searchUserList");
    if (getSearchUserHistory) {
      const reverseGetHistory = JSON.parse(getSearchUserHistory).reverse();
      setSearchUserHistory(reverseGetHistory);
    }
  }, []);

  return (
    <Wrap>
      <Header receiveLink={"/"} />
      <ContentMain>
        <LeftImg />
        <HomeTitle>
          <MainMessage>
            <MainContent>
              <a style={{ fontSize: "28px" }}>넥슨 오픈API 기반</a>
            </MainContent>
            <MainContent>
              <a style={{ fontSize: "40px" }}>카트라이더 전적 검색</a>
            </MainContent>
            <MainCopy>
              <MainContent>
                <a style={{ fontSize: "18px" }}>사 회 적 거 리 두 기</a>
              </MainContent>
            </MainCopy>
          </MainMessage>
          <SearchForm>
            <SelectDiv>
              <SearchLable>
                <span onClick={handleSelectTypeModal}>
                  {selectTypeList[selectType].name} ▾
                </span>
              </SearchLable>
            </SelectDiv>
            <SearchInputDiv>
              <SearchInput
                ref={searchUserNickname}
                placeholder={selectTypeList[selectType].placeholder}
                onFocus={handleAutoSearchModal}
                onBlur={handleAutoSearchModal}
              />
            </SearchInputDiv>
            <SearchButton onClick={searchUserBtnClick}>
              <img
                style={{ cursor: "pointer" }}
                src="/img/tmi_logo_default.svg"
              />
            </SearchButton>
            {isAutoSearchModal ? (
              <AutoSearchModal>
                {searchUserHistory.map((elem) => (
                  <AutoSearchContent key={elem.nickName}>
                    👀 {elem.nickName}
                  </AutoSearchContent>
                ))}
              </AutoSearchModal>
            ) : null}
            {isSelectTypeModal ? (
              <SelectTypeModal>
                {selectTypeList.map((elem, index) => (
                  <SelectOption
                    key={elem.name}
                    onClick={() => setChangeType(index)}
                  >
                    {elem.name}
                  </SelectOption>
                ))}
              </SelectTypeModal>
            ) : null}
          </SearchForm>
        </HomeTitle>
        <RightImg />
      </ContentMain>
    </Wrap>
  );
};

export default HomePage;
