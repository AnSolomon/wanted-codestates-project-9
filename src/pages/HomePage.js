import React from "react";
import styled from "styled-components";
import Header from '../components/header/Header';

const Wrap = styled.div`
  width: 100%;
  height: 1000px;
  min-width: 1000px;
  overflow-y: hidden;
`;

const ContentMain = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 68%;
  margin-top: -55px;
  background-image: url("/img/main_bg1.png");
`;

const LeftImg = styled.img.attrs({
    src: "/img/covid_left.png",
  })`
    position: absolute;
    width: 380px;
    top: 200px;
    left: 0;
    margin-left: 20px;
  `;
  
  const RightImg = styled.img.attrs({
    src: "/img/covid_right.png",
  })`
    position: absolute;
    width: 380px;
    top: 200px;
    right: 0;
    margin-right: 20px;
  `;

const HomeTitle = styled.div``;

const MainMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 200px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
  color: white;
  letter-spacing: -1px;
`;

const MainContent = styled.p`
  margin: 0;
  padding: 1px;
`;

const MainCopy = styled.div`
  width: 280px;
  margin-top: 7px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

const SearchForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 49%;
  left: 50%;
  width: 50%;
  height: 49px;
  border: 4px solid white;
  border-radius: 33.5px;
  padding: 5px;
  transform: translate(-50%, -50%);
  transition: all 0.1s ease-in-out;
  z-index: 2;
`;

const SelectDiv = styled.div`
  width: 10%;
  margin-left: 30px;

`;

const SearchInputDiv = styled.div`
  width: 80%;
  margin-left: 20px;
`;

const SearchButton = styled.div`
  display: flex;
  background-color: transparent;
  margin-right: 25px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  color: white;
  font-size: 24px;

&:focus{
    &::placeholder{
        color: transparent;
        transition: all 0.2s ease-in-out;
    }
}

  &::placeholder {
    
    color: white;
    opacity: 0.5;

  }
`;

const HomePage = () => {
  return (
    <Wrap>
      <Header />
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
              <label>유저</label>
              <select></select>
            </SelectDiv>
            <SearchInputDiv>
              <SearchInput placeholder="카트라이더 닉네임을 입력" />
            </SearchInputDiv>
            <SearchButton>
              <img
                style={{ cursor: "pointer" }}
                src="/img/tmi_logo_default.svg"
              />
            </SearchButton>
          </SearchForm>
          <div>자동완성</div>
        </HomeTitle>
        <RightImg />
      </ContentMain>
    </Wrap>
  );
};

export default HomePage;
