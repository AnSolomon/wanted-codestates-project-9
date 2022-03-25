import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useNavigate } from "react-router-dom";
import {
  getIndiRankDataRequest,
  getTeamRankDataRequest,
} from "../../redux/rankDataSlice";
import Header from "../../components/header/Header";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import {
  Wrap,
  MainBackground,
  WaveDiv,
  BackWaveDiv,
  ContentWrap,
  ContentInner,
  RankTitleDiv,
  RankTitle,
  LineDiv,
  RankDateDiv,
  RankCheckDateDiv,
  RankCheckDate,
  RankRecentUpdateDate,
  RankTypeDiv,
  IndividualMatch,
  TeamMatch,
  TopThreeDiv,
  TopThreeCard,
  RankListDiv,
  RankHeader,
  RankUserDiv,
  RankNumber,
  RankNickname,
  RankWinningCount,
  RankPlayCount,
  RankAver,
  MedalImg,
  CharacterImg,
  TopThreeInfo,
  TopThreeData,
  TopThreeNickname,
  TopThreeRankDiv,
  TopThreeType,
  TopThreeRank,
  TopThreeDataContent,
  TopThreePoint,
  InfiniteDiv,
} from "./RankPage.style";

import { rankData } from "../../data/sampleData";

const RankPage = () => {
  const MEDAL_IMAGE_URL = [
    "https://ansolomon.github.io/wanted-codestates-project-9/img/icon_goldmedal.png",
    "https://ansolomon.github.io/wanted-codestates-project-9/img/icon_silvermedal.png",
    "https://ansolomon.github.io/wanted-codestates-project-9/img/icon_bronzemedal.png",
  ];

  const date = new Date();
  const getLastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const [params, setParams] = useSearchParams();
  const matchType = params.get("mode");

  const dispatch = useDispatch();
  const getRankInfo = useSelector((state) => state.rankDataSlice.data);
  const changeMatchType = useNavigate();

  const [state, setState] = useState({ itemCount: 10, isLoading: false });

  const [currYaer, setCurrYear] = useState();
  const [currMonth, setCurrMonth] = useState();
  const [currDisplayMonth, setCurrDisplayMonth] = useState();
  const [currDate, setCurrDate] = useState();
  const [lastDate, setLastDate] = useState();
  const [currTime, setCurrTime] = useState();

  const [topThreeList, setTopThreeList] = useState();
  const [userRankList, setUserRankList] = useState();

  const fetchItems = async () => {
    setState((prev) => ({ ...prev, isLoading: true }));
    setState((prev) => ({
      itemCount: prev.itemCount + 10,
      isLoading: false,
    }));
  };

  useEffect(() => {
    const getYear = date.getFullYear();
    const getMonth = String(date.getMonth() + 1).padStart(2, "0");
    const getDate = String(date.getDate()).padStart(2, "0");
    const getTime = "".concat(
      String(date.getHours()).padStart(2, "0"),
      ":",
      String(date.getMinutes()).padStart(2, "0"),
      ":",
      String(date.getSeconds()).padStart(2, "0")
    );

    const getStartDate = "".concat(
      getYear,
      "-",
      getMonth,
      "-",
      "01",
      " ",
      "00:00:00"
    );
    const getEndDate = "".concat(
      getYear,
      "-",
      getMonth,
      "-",
      getDate,
      " ",
      getTime
    );

    // if(matchType === "team"){
    //   dispatch(getTeamRankDataRequest(getStartDate, getEndDate));
    // }else{
    //   dispatch(getIndiRankDataRequest(getStartDate, getEndDate));
    // }

    setCurrYear(getYear);
    setCurrDisplayMonth(date.getMonth() + 1);
    setCurrMonth(getMonth);
    setCurrDate(getDate);
    setCurrTime(getTime);
    setLastDate(getLastDate.getDate());

    setTopThreeList(rankData.slice(0, 3));
    setUserRankList(rankData.slice(3));

    fetchItems();
  }, []);

  const [_, setRef] = useInfiniteScroll(async (entry, observer) => {
    observer.unobserve(entry.target);
    await fetchItems();
    observer.observe(entry.target);
  }, {});

  const handleChangeMatchTypeClick = (type) => {
    if (matchType !== type) {
      changeMatchType(`/rank?mode=${type}`);
    }
  };

  const { itemCount, isLoading } = state;
  if (!itemCount) return null;

  return (
    <Wrap>
      <Header receiveLink={"/rank?mode=indi"} />
      <MainBackground>
        <WaveDiv />
        <BackWaveDiv />
      </MainBackground>
      <ContentWrap>
        <ContentInner>
          <RankTitleDiv>
            <RankTitle>{currDisplayMonth}월 스피드전 랭킹</RankTitle>
            <LineDiv />
            <RankDateDiv>
              <RankCheckDateDiv>
                <RankCheckDate>
                  랭킹 산정기간 {currYaer}년{currMonth}월01일00:00:00 ~
                  {currYaer}년{currMonth}월{lastDate}일24:00:00
                </RankCheckDate>
              </RankCheckDateDiv>
              <RankRecentUpdateDate>
                최근 업데이트 {currYaer}년{currMonth}월{currDate}일{currTime}
              </RankRecentUpdateDate>
              <RankTypeDiv>
                <IndividualMatch
                state={matchType}
                onClick={() => handleChangeMatchTypeClick("indi")}
                >
                  개인전
                </IndividualMatch>
                <TeamMatch
                state={matchType}
                onClick={() => handleChangeMatchTypeClick("team")}
                >
                  팀전
                </TeamMatch>
              </RankTypeDiv>
            </RankDateDiv>
          </RankTitleDiv>
          <TopThreeDiv>
            {topThreeList?.map((elem, index) => {
              return (
                <TopThreeCard key={elem.characterName}>
                  <MedalImg src={MEDAL_IMAGE_URL[index]} />
                  <CharacterImg
                    src={`https://static.api.nexon.co.kr/kart/latest/character/${elem.character}.png`}
                  />
                  <TopThreeInfo>
                    <TopThreeNickname>{elem.characterName}</TopThreeNickname>
                    <TopThreeRankDiv>
                      <TopThreeType>순위</TopThreeType>
                      <TopThreeRank>{index + 1}위</TopThreeRank>
                    </TopThreeRankDiv>
                  </TopThreeInfo>
                  <TopThreeData>
                    <TopThreeDataContent>
                      <TopThreeType>승리횟수</TopThreeType>
                      <TopThreePoint>{elem.winningCount}회</TopThreePoint>
                    </TopThreeDataContent>
                    <TopThreeDataContent>
                      <TopThreeType>주행횟수</TopThreeType>
                      <TopThreePoint>{elem.playCount}회</TopThreePoint>
                    </TopThreeDataContent>
                    <TopThreeDataContent>
                      <TopThreeType>평균순위</TopThreeType>
                      <TopThreePoint>{elem.avrRank}위</TopThreePoint>
                    </TopThreeDataContent>
                  </TopThreeData>
                </TopThreeCard>
              );
            })}
          </TopThreeDiv>
          <RankListDiv>
            <RankHeader>
              <RankNumber>#</RankNumber>
              <RankNickname>닉네임(순위변동)</RankNickname>
              <RankWinningCount>승리횟수</RankWinningCount>
              <RankPlayCount>주행횟수</RankPlayCount>
              <RankAver>평균순위</RankAver>
            </RankHeader>

            {userRankList?.slice(0, itemCount).map((elem, index) => {
              return (
                <RankUserDiv key={elem.characterName}>
                  <RankNumber>{index + 4}</RankNumber>
                  <RankNickname>{elem.characterName}</RankNickname>
                  <RankWinningCount>{elem.winningCount}회</RankWinningCount>
                  <RankPlayCount>{elem.playCount}회</RankPlayCount>
                  <RankAver>{elem.avrRank}위</RankAver>
                </RankUserDiv>
              );
            })}
            <InfiniteDiv ref={setRef}/>
          </RankListDiv>
        </ContentInner>
      </ContentWrap>
    </Wrap>
  );
};

export default RankPage;
