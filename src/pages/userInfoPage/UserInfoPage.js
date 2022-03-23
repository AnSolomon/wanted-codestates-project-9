import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchResultRequest } from "../../redux/userInfoSlice";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/header/Header";
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
  UserRecommend,
  ReuqestMatchDiv,
  RequestDiv,
  DataChartDiv,
  RecordDiv,
  SummaryDiv,
  RankGraphDiv,
  TrackKartDiv,
  SpinnerDiv,
  Spinner,
  LoadingText,
} from "./UserInfoPage.style";

const UserInfoPage = () => {
  const [params, setParams] = useSearchParams();
  const searchNickname = params.get("nick");
  const matchType = params.get("matchType");

  const dispatch = useDispatch();
  const getUserInfo = useSelector((state) => state.userInfoSlice.data);

  const [isLoading, setIsLoading] = useState(true);
  const [getMatchesData, setGetMatchesData] = useState();

  useEffect(() => {
    dispatch(searchResultRequest(searchNickname));
  }, []);

  useEffect(() => {
    if (getUserInfo) {
      setGetMatchesData(getUserInfo.matches);
    }
  }, [getUserInfo]);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (getUserInfo.nickName === searchNickname) {
        setIsLoading(false);
      }
    }, 1800);

    return () => {
      clearTimeout(timer);
    };
  }, [getUserInfo]);

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
                  src={`https://static.api.nexon.co.kr/kart/latest/character/${getMatchesData[0].matches[0].player.character}.png`}
                />
              </UserImg>
              <UserProfile>
                <ProfileInfo>
                  <NinknameDiv>{searchNickname}</NinknameDiv>
                  <LevelDiv>Lv.{getUserInfo.level}</LevelDiv>
                </ProfileInfo>
                <SelectMatch>
                  <IndividualMatch state={matchType}>개인전</IndividualMatch>
                  <TeamMatch state={matchType}>팀전</TeamMatch>
                </SelectMatch>
              </UserProfile>
              <UserRecommend>데이터가 들어갈 부분</UserRecommend>
            </ProfileDiv>
            <ReuqestMatchDiv>
              <span style={{ marginLeft: "20px" }}>
                1대1 대결 요청 - "{searchNickname}"에게 1대1 대결 요청을
                보내보세요!
              </span>
              <RequestDiv> ⚔ 대결요청</RequestDiv>
            </ReuqestMatchDiv>
            <DataChartDiv>
              <SummaryDiv>
                <div>종합 전적</div>
                <div>
                    <div>승률</div>
                    <div>완주율</div>
                    <div>리타이어율</div>
                </div>
              </SummaryDiv>
              <RankGraphDiv></RankGraphDiv>
              <TrackKartDiv></TrackKartDiv>
            </DataChartDiv>
            <RecordDiv>기록이 들어갈 부분</RecordDiv>
          </ContentInner>
        </ContentWrap>
      )}
    </Wrap>
  );
};

export default UserInfoPage;
