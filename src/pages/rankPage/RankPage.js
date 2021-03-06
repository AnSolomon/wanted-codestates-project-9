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
    "/img/icon_goldmedal.png",
    "/img/icon_silvermedal.png",
    "/img/icon_bronzemedal.png",
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
            <RankTitle>{currDisplayMonth}??? ???????????? ??????</RankTitle>
            <LineDiv />
            <RankDateDiv>
              <RankCheckDateDiv>
                <RankCheckDate>
                  ?????? ???????????? {currYaer}???{currMonth}???01???00:00:00 ~
                  {currYaer}???{currMonth}???{lastDate}???24:00:00
                </RankCheckDate>
              </RankCheckDateDiv>
              <RankRecentUpdateDate>
                ?????? ???????????? {currYaer}???{currMonth}???{currDate}???{currTime}
              </RankRecentUpdateDate>
              <RankTypeDiv>
                <IndividualMatch
                state={matchType}
                onClick={() => handleChangeMatchTypeClick("indi")}
                >
                  ?????????
                </IndividualMatch>
                <TeamMatch
                state={matchType}
                onClick={() => handleChangeMatchTypeClick("team")}
                >
                  ??????
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
                      <TopThreeType>??????</TopThreeType>
                      <TopThreeRank>{index + 1}???</TopThreeRank>
                    </TopThreeRankDiv>
                  </TopThreeInfo>
                  <TopThreeData>
                    <TopThreeDataContent>
                      <TopThreeType>????????????</TopThreeType>
                      <TopThreePoint>{elem.winningCount}???</TopThreePoint>
                    </TopThreeDataContent>
                    <TopThreeDataContent>
                      <TopThreeType>????????????</TopThreeType>
                      <TopThreePoint>{elem.playCount}???</TopThreePoint>
                    </TopThreeDataContent>
                    <TopThreeDataContent>
                      <TopThreeType>????????????</TopThreeType>
                      <TopThreePoint>{elem.avrRank}???</TopThreePoint>
                    </TopThreeDataContent>
                  </TopThreeData>
                </TopThreeCard>
              );
            })}
          </TopThreeDiv>
          <RankListDiv>
            <RankHeader>
              <RankNumber>#</RankNumber>
              <RankNickname>?????????(????????????)</RankNickname>
              <RankWinningCount>????????????</RankWinningCount>
              <RankPlayCount>????????????</RankPlayCount>
              <RankAver>????????????</RankAver>
            </RankHeader>

            {userRankList?.slice(0, itemCount).map((elem, index) => {
              return (
                <RankUserDiv key={elem.characterName}>
                  <RankNumber>{index + 4}</RankNumber>
                  <RankNickname>{elem.characterName}</RankNickname>
                  <RankWinningCount>{elem.winningCount}???</RankWinningCount>
                  <RankPlayCount>{elem.playCount}???</RankPlayCount>
                  <RankAver>{elem.avrRank}???</RankAver>
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
