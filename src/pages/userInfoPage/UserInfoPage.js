import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchResultRequest } from "../../redux/userInfoSlice";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../components/header/Header";
import DonutChart from "../../components/donutChart/DonutChart";
import LineGraph from "../../components/lineGraph/LineGraph";
import trackData from "../../data/track.json";
import kartData from "../../data/kart.json";

import {
  Wrap,
  HeaderBackground,
  ContentWrap,
  ContentInner,
  ProfileDiv,
  DataInfoDiv,
  ReportDiv,
  UserImg,
  UserProfile,
  ProfileInfo,
  SelectMatch,
  NinknameDiv,
  LevelDiv,
  IndividualMatch,
  TeamMatch,
  UserGraphDiv,
  ReuqestMatchDiv,
  RequestDiv,
  DataChartDiv,
  RecordDiv,
  RecordSection,
  RecordSpeedDiv,
  RecordItemDiv,
  StartTime,
  Rank,
  RankSpan,
  Track,
  Kart,
  MatchTime,
  RecordTitle,
  CountSpan,
  NoHistoryDiv,
  SpinnerDiv,
  Spinner,
  LoadingText,
} from "./UserInfoPage.style";

const UserInfoPage = () => {
  const indiSpeed =
    "7b9f0fd5377c38514dbb78ebe63ac6c3b81009d5a31dd569d1cff8f005aa881a";
  const indiItem =
    "7ca6fd44026a2c8f5d939b60aa56b4b1714b9cc2355ec5e317154d4cf0675da0";
  const teamSpeed =
    "effd66758144a29868663aa50e85d3d95c5bc0147d7fdb9802691c2087f3416e";
  const teamItem =
    "14e772d195642279cf6c8307125044274db371c1b08fc3dd6553e50d76d2b3aa";

  const [params, setParams] = useSearchParams();
  const searchNickname = params.get("nick");
  const matchType = params.get("matchType");

  const dispatch = useDispatch();
  const getUserInfo = useSelector((state) => state.userInfoSlice.data);
  const changeMatchType = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [characterImg, setCharacterImg] = useState();
  const [totalMatchCount, setTotalMatchCount] = useState();
  const [getSpeedMatchesData, setGetSpeedMatchesData] = useState();
  const [getItemMatchesData, setGetItemMatchesData] = useState();
  const [winningCount, setWinningCount] = useState();
  const [retireCount, setRetireCount] = useState();
  const [winningSpeedCount, setWinningSpeedCount] = useState();
  const [retireSpeedCount, setRetireSpeedCount] = useState();
  const [winningItemCount, setWinningItemCount] = useState();
  const [retireItemCount, setRetireItemCount] = useState();
  const [speedRankList, setSpeedRankList] = useState();
  const [itemRankList, setItemRankList] = useState();
  const [speedRecordDataList, setSpeedRecordDataList] = useState();
  const [itemRecordDataList, setItemRecordDataList] = useState();

  useEffect(() => {
    dispatch(searchResultRequest(searchNickname));
  }, []);

  useEffect(() => {
    let timer = null;

    const getData = (speed, item) => {
      const getSpeedData = getUserInfo.matches.filter(
        (elem) => elem.matchType === speed
      );
      const getItemData = getUserInfo.matches.filter(
        (elem) => elem.matchType === item
      );
      setGetSpeedMatchesData(getSpeedData[0]);
      setGetItemMatchesData(getItemData[0]);

      setTotalMatchCount(
        (getSpeedData[0]?.matches.length ?? 0) +
          (getItemData[0]?.matches.length ?? 0)
      );

      let winningSpeedCount = 0;
      let winningItemCount = 0;
      let retireSpeedCount = 0;
      let retireItemCount = 0;
      let getSpeedRankData = [];
      let getItemRankData = [];
      let getSpeedRecordDataList = [];
      let getItemRecordDataList = [];

      (getSpeedData[0]?.matches ?? []).map((elem) => {
        let min = parseInt(Number(elem.player.matchTime) / 1000 / 60);
        let sec = parseInt(Number(elem.player.matchTime) / 1000) - min * 60;
        let ms = Number(elem.player.matchTime) % 1000;
        ms = Math.round(ms / 10);

        if (elem.matchResult === "1") {
          winningSpeedCount += 1;
        } else if (elem.player.matchRetired === "1") {
          retireSpeedCount += 1;
        }

        getSpeedRankData.unshift(
          Number(elem.player.matchRank === "99" ? "8" : elem.player.matchRank)
        );

        const getTrackName = trackData.filter(
          (track) => elem.trackId === track.id
        );
        const getKartName = kartData.filter(
          (kart) => elem.player.kart === kart.id
        );

        let tempObj = {
          startTime: elem.startTime.replace("T", " "),
          matchRank:
            elem.player.matchRank === "99" ? "Retired" : elem.player.matchRank,
          playerCount: elem.playerCount,
          trackId: elem.trackId,
          trackName: getTrackName[0]?.name,
          kartId: elem.player.kart,
          kartName: getKartName[0]?.name,
          matchTime: elem.player.matchTime
            ? "".concat(min, "'", String(sec).padStart(2, 0), "'", ms)
            : "",
        };

        getSpeedRecordDataList.push(tempObj);
      });

      (getItemData[0]?.matches ?? []).map((elem) => {
        let min = parseInt(Number(elem.player.matchTime) / 1000 / 60);
        let sec = parseInt(Number(elem.player.matchTime) / 1000) - min * 60;
        let ms = Number(elem.player.matchTime) % 1000;
        ms = Math.round(ms / 10);

        if (elem.matchResult === "1") {
          winningItemCount += 1;
        } else if (elem.player.matchRetired === "1") {
          retireItemCount += 1;
        }

        getItemRankData.unshift(
          Number(elem.player.matchRank === "99" ? "8" : elem.player.matchRank)
        );

        const getTrackName = trackData.filter(
          (track) => elem.trackId === track.id
        );
        const getKartName = kartData.filter(
          (kart) => elem.player.kart === kart.id
        );

        let tempObj = {
          startTime: elem.startTime.replace("T", " "),
          matchRank:
            elem.player.matchRank === "99" ? "Retired" : elem.player.matchRank,
          playerCount: elem.playerCount,
          trackId: elem.trackId,
          trackName: getTrackName[0]?.name,
          kartId: elem.player.kart,
          kartName: getKartName[0]?.name,
          matchTime: elem.player.matchTime
            ? "".concat(min, "'", String(sec).padStart(2, 0), "'", ms)
            : "",
        };
        getItemRecordDataList.push(tempObj);
      });

      setWinningSpeedCount(winningSpeedCount);
      setRetireSpeedCount(retireSpeedCount);
      setWinningItemCount(winningItemCount);
      setRetireItemCount(retireItemCount);
      setWinningCount(winningSpeedCount + winningItemCount);
      setRetireCount(retireSpeedCount + retireItemCount);
      setSpeedRankList(getSpeedRankData);
      setItemRankList(getItemRankData);
      setSpeedRecordDataList(getSpeedRecordDataList);
      setItemRecordDataList(getItemRecordDataList);
    };

    if (getUserInfo.nickName === searchNickname) {
      timer = setTimeout(() => {
        setIsLoading(false);
      }, 1800);

      setCharacterImg(getUserInfo.matches[0].matches[0].player.character);

      if (matchType === "team") {
        getData(teamSpeed, teamItem);
      } else {
        getData(indiSpeed, indiItem);
      }
    }

    return () => {
      clearTimeout(timer);
    };
  }, [getUserInfo, matchType]);

  const handleChangeMatchTypeClick = (type) => {
    if (matchType !== type) {
      changeMatchType(`/user?nick=${searchNickname}&matchType=${type}`);
    }
  };

  return (
    <Wrap>
      <Header receiveLink={""} />
      <HeaderBackground />
      {isLoading ? (
        <SpinnerDiv>
          <Spinner />
          <LoadingText>데이터를 집계 중입니다.</LoadingText>
        </SpinnerDiv>
      ) : (
        <ContentWrap>
          <ContentInner>
            <DataInfoDiv>
              <span>
                📢 카트라이더 매치데이터는 최근 1년치 데이터만 확인할 수
                있습니다.
              </span>
              <ReportDiv>🚨 신고하기</ReportDiv>
            </DataInfoDiv>
            <ProfileDiv>
              <UserImg>
                <img
                  style={{ height: "123px" }}
                  src={`https://static.api.nexon.co.kr/kart/latest/character/${characterImg}.png`}
                />
              </UserImg>
              <UserProfile>
                <ProfileInfo>
                  <NinknameDiv>{searchNickname}</NinknameDiv>
                  <LevelDiv>Lv.{getUserInfo.level}</LevelDiv>
                </ProfileInfo>
                <SelectMatch>
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
                </SelectMatch>
              </UserProfile>
              <UserGraphDiv>
                <LineGraph
                  speedRankList={speedRankList?.slice(-50) ?? []}
                  itemRankList={itemRankList?.slice(-50) ?? []}
                />
              </UserGraphDiv>
            </ProfileDiv>
            <ReuqestMatchDiv>
              <span style={{ marginLeft: "20px" }}>
                1대1 대결 요청 - "{searchNickname}"에게 1대1 대결 요청을
                보내보세요!
              </span>
              <RequestDiv> ⚔ 대결요청</RequestDiv>
            </ReuqestMatchDiv>
            <DataChartDiv>
              <DonutChart
                chartTitle="종합 전적"
                totalMatchCount={totalMatchCount}
                winningCount={winningCount}
                retireCount={retireCount}
              />
              <DonutChart
                chartTitle="스피드전 전적"
                totalMatchCount={getSpeedMatchesData?.matches.length ?? 0}
                winningCount={winningSpeedCount}
                retireCount={retireSpeedCount}
              />
              <DonutChart
                chartTitle="아이템전 전적"
                totalMatchCount={getItemMatchesData?.matches.length ?? 0}
                winningCount={winningItemCount}
                retireCount={retireItemCount}
              />
            </DataChartDiv>
            <RecordDiv>
              <RecordSpeedDiv>
                <RecordTitle>스피드전 History</RecordTitle>
                {speedRecordDataList.length !== 0 ? (
                  speedRecordDataList.map((elem) => {
                    return (
                      <RecordSection key={elem.startTime} state={elem.matchRank}>
                        <StartTime>{elem.startTime}</StartTime>
                        <Rank state={elem.matchRank}>
                          <RankSpan>#{elem.matchRank}</RankSpan>
                          {elem.matchRank === "Retired" ? null : (
                            <CountSpan>/{elem.playerCount}</CountSpan>
                          )}
                        </Rank>
                        <Track>
                          <img
                            style={{ width: "80px", height: "80px" }}
                            src={`https://static.api.nexon.co.kr/kart/latest/track/${elem.trackId}.png`}
                            onError={(e) => {
                              e.target.src = "/img/load_error.png";
                            }}
                          />
                          <p>{elem.trackName}</p>
                        </Track>
                        <Kart>
                          <img
                            style={{ width: "80px", height: "80px" }}
                            src={`https://static.api.nexon.co.kr/kart/latest/kart/${elem.kartId}.png`}
                            onError={(e) => {
                              e.target.src = "/img/load_error.png";
                            }}
                          />
                          <p>{elem.kartName}</p>
                        </Kart>
                        <MatchTime>{elem.matchTime}</MatchTime>
                      </RecordSection>
                    );
                  })
                ) : (
                  <NoHistoryDiv>History가 없습니다.</NoHistoryDiv>
                )}
              </RecordSpeedDiv>
              <RecordItemDiv>
                <RecordTitle>아이템전 History</RecordTitle>
                {itemRecordDataList.length !== 0 ? (
                  itemRecordDataList.map((elem) => {
                    return (
                      <RecordSection key={elem.startTime} state={elem.matchRank}>
                        <StartTime>{elem.startTime}</StartTime>
                        <Rank state={elem.matchRank}>
                          <RankSpan>#{elem.matchRank}</RankSpan>
                          {elem.matchRank === "Retired" ? null : (
                            <CountSpan>/{elem.playerCount}</CountSpan>
                          )}
                        </Rank>
                        <Track>
                          <img
                            style={{ width: "80px", height: "80px" }}
                            src={`https://static.api.nexon.co.kr/kart/latest/track/${elem.trackId}.png`}
                            onError={(e) => {
                              e.target.src = "/img/load_error.png";
                            }}
                          />
                          <p>{elem.trackName}</p>
                        </Track>
                        <Kart>
                          <img
                            style={{ width: "80px", height: "80px" }}
                            src={`https://static.api.nexon.co.kr/kart/latest/kart/${elem.kartId}.png`}
                            onError={(e) => {
                              e.target.src = "/img/load_error.png";
                            }}
                          />
                          <p>{elem.kartName}</p>
                        </Kart>
                        <MatchTime>{elem.matchTime}</MatchTime>
                      </RecordSection>
                    );
                  })
                ) : (
                  <NoHistoryDiv>History가 없습니다.</NoHistoryDiv>
                )}
              </RecordItemDiv>
            </RecordDiv>
          </ContentInner>
        </ContentWrap>
      )}
    </Wrap>
  );
};

export default UserInfoPage;
