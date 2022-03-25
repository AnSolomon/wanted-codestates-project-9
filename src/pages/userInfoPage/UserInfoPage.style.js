import styled, { keyframes } from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  min-width: 1000px;
  min-height: 1000px;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const HeaderBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 55px;
  margin-top: -55px;
  background-color: #005fcc;
  z-index: -1;
`;

export const ContentWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 100%;
`;

export const DataInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 20px;
  width: 100%;
  font-size: 12px;
  color: gray;
  letter-spacing: -1px;
  margin-top: 20px;
  padding: 0;
`;

export const ReportDiv = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 25px;
  border: 1px solid gray;
  border-radius: 15px;
`;

export const ProfileDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 220px;
  margin-top: 10px;
  border-width: 1px 1px 1px 4px;
  border-style: solid;
  border-color: whitesmoke whitesmoke whitesmoke #07f;
  background-color: white;
  box-sizing: border-box;
`;

export const UserImg = styled.div``;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100%;
`;

export const ProfileInfo = styled.div`
  height: 60%;
`;

export const NinknameDiv = styled.div`
  font-size: 45px;
  font-weight: bold;
`;

export const LevelDiv = styled.div`
  font-size: 20px;
  color: gray;
`;

export const SelectMatch = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;

export const IndividualMatch = styled.span`
  cursor: pointer;
  width: 100px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border-style: solid;
  border-color: #07f;
  border-width: 0.7px 0.7px 0.7px 0.7px;
  border-radius: 5px 0 0 5px;
  color: ${({ state }) => (state !== "team" ? "white" : "#07f")};
  background-color: ${({ state }) => (state !== "team" ? "#07f" : "white")};
`;

export const TeamMatch = styled.span`
  cursor: pointer;
  width: 100px;
  height: 25px;
  line-height: 25px;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  border-style: solid;
  border-color: #07f;
  border-width: 0.7px 0.7px 0.7px 0.7px;
  border-radius: 0 5px 5px 0;
  color: ${({ state }) => (state === "team" ? "white" : "#07f")};
  background-color: ${({ state }) => (state === "team" ? "#07f" : "white")};
`;

export const UserGraphDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 100%;
  border: 1px solid #f2f2f2;
`;

export const UserRecommendDiv = styled.div`
  width: 400px;
  height: 100%;
  background-color: purple;
`;

const colorChangeAnimation = keyframes`
  0% {
    background-position: 0%;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0%;
  }
`;

export const ReuqestMatchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: linear-gradient(-45deg, #ee7752, #f62459, #07f, #23d5ab);
  background-size: 400%;
  animation: ${colorChangeAnimation} 20s ease infinite;
  color: #fff;
  margin-top: 20px;
  padding-left: 20px;
  font-size: 15px;
  font-weight: 500;
  padding: 0;
  font-weight: bold;
`;

export const RequestDiv = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 25px;
  border: 1px solid white;
  border-radius: 15px;
  margin-right: 20px;
  font-size: 14px;
`;

export const DataChartDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 266px;
  margin-top: 20px;
`;

export const RecordDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

export const RecordSpeedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border: 1px solid #f2f2f2;

  margin-right: 5px;
`;

export const RecordItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border: 1px solid #f2f2f2;
  margin-left: 5px;
`;

export const RecordTitle = styled.p`
  height: 35px;
  width: 95%;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
  letter-spacing: -1px;
`;

export const RecordSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 160px;
  margin-bottom: 5px;
  border-width: 1px 1px 1px 4px;
  border-style: solid;
  border-color: ${({ state }) =>
    state === "Retired"
      ? "whitesmoke whitesmoke whitesmoke red"
      : state === "1"
      ? "whitesmoke whitesmoke whitesmoke #07f"
      : "whitesmoke whitesmoke whitesmoke gray"};
  background-color: ${({ state }) =>
    state === "Retired"
      ? "rgba(246,36,89,.05)"
      : state === "1"
      ? "rgba(0,119,255,.05)"
      : "white"};
  box-sizing: border-box;
`;

export const StartTime = styled.div`
  margin-left: 10px;
  font-size: 14px;
  flex: 1;
`;

export const Rank = styled.div`
  font-style: italic;
  flex: 1;
  color: ${({ state }) =>
    state === "Retired" ? "red" : state === "1" ? "#07f" : "gray"};
`;

export const RankSpan = styled.span`
  font-size: 24px;
  
`;

export const CountSpan = styled.span`
  font-size: 20px;
  font-style: italic;
`;

export const Track = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 2;
  letter-spacing: -1px;
`;

export const Kart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  letter-spacing: -1px;
`;

export const MatchTime = styled.div`
  margin-right: 10px;
  flex: 1;
`;

export const NoHistoryDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  margin-bottom: 5px;
  border: 2px solid whitesmoke;
  background-color: #ebebeb;

  letter-spacing: -1px;

  box-sizing: border-box;
`;

export const SpinnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
  width: 100%;
  height: 1000px;
`;

const rotationAnimation = keyframes`
  0% {
    tansform: rotate(0deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid transparent;
  border-top: 3px solid #0079ff;
  border-left: 3px solid #0079ff;
  animation: ${rotationAnimation} 0.8s linear infinite;
`;

export const LoadingText = styled.p`
  height: 40px;
  font-size: 12px;
  color: gray;
  letter-spacing: -1px;
`;
