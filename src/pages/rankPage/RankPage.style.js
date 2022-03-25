import styled, { keyframes } from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  height: 1000px;
  min-width: 1000px;
  min-height: 1000px;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const MainBackground = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 680px;
  margin-top: -55px;
  background-color: #005fcc;
`;

const waveAnimation = keyframes`
  0% {
    background-position: 0%;
  }
  25%{
    background-position: 25%;
  }
  50% {
    background-position: 50%;
  }
  75%{
    background-position: 75%;
  }
  100% {
    background-position: 100%;
  }

`;

const BackWaveAnimation = keyframes`
  0% {
    background-position: 0%;
  }
  25%{
    background-position: 25%;
  }
  50% {
    background-position: 50%;
  }
  75%{
    background-position: 75%;
  }
  100% {
    background-position: 100%;
  }

`;

export const WaveDiv = styled.div`
  position: absolute;
  background-image: url("https://ansolomon.github.io/wanted-codestates-project-9/img/background_wave.svg");
  top: 72%;
  width: 6400px;
  height: 198px;
  animation: ${waveAnimation} 15s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
`;

export const BackWaveDiv = styled.div`
  position: absolute;
  background-image: url("https://ansolomon.github.io/wanted-codestates-project-9/img/background_wave.svg");
  top: 72%;
  left: -50%;
  width: 6400px;
  height: 198px;
  animation: ${BackWaveAnimation} 15s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.2s
      infinite;
`;

export const ContentWrap = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 100px;
  left: 0%;
`;

export const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 100%;
`;

export const RankTitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 50px;
  width: 100%;
  box-sizing: border-box;
`;

export const RankTitle = styled.div`
  margin-bottom: 10px;
  font-size: 24px;
  color: white;
  letter-spacing: -1px;
`;

export const LineDiv = styled.div`
  width: 40px;
  height: 10px;
  border-top: 3px solid white;
`;

export const RankDateDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const RankCheckDateDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const RankCheckDate = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: white;
  letter-spacing: -1px;
`;

export const RankRecentUpdateDate = styled.div`
  justify-content: flex-start;
  font-size: 12px;
  font-weight: bold;
  color: white;
  letter-spacing: -1px;
`;

export const RankTypeDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
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
  border-color: white;
  border-width: 0.7px 0.7px 0.7px 0.7px;
  border-radius: 5px 0 0 5px;
  color: ${({ state }) => (state !== "team" ? "#07f" : "white")};
  background-color: ${({ state }) =>
    state !== "team" ? "white" : "transparent"};
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
  border-color: white;
  border-width: 0.7px 0.7px 0.7px 0.7px;
  border-radius: 0 5px 5px 0;
  color: ${({ state }) => (state === "team" ? "#07f" : "white")};
  background-color: ${({ state }) =>
    state === "team" ? "white" : "transparent"};
`;

export const TopThreeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
`;

export const TopThreeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 300px;
  height: 250px;
  border-radius: 10px;
  background-color: white;
  margin: 20px;
  box-shadow: 5px 5px 5px -5px rgb(0 0 0 / 21%);
`;

export const MedalImg = styled.img`
  position: absolute;
  top: -5%;
  left: 5%;
`;

export const CharacterImg = styled.img`
  position: absolute;
  top: -10%;
  right: -10%;
  height: 150px;
`;

export const TopThreeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  height: 50%;
  margin-top: 20px;
`;

export const TopThreeData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 80%;
  height: 40%;

  border-top: 1px solid gray;
`;

export const TopThreeNickname = styled.span`
  font-size: 36px;
  font-weight: bold;
  color: #07f;
  letter-spacing: -1px;
  margin-bottom: 10px;
`;

export const TopThreeRankDiv = styled.span``;

export const TopThreeType = styled.span`
  font-size: 16px;
  color: gray;
  letter-spacing: -1px;
  margin-right: 10px;
`;

export const TopThreeRank = styled.span`
  font-size: 24px;
  color: black;
  letter-spacing: -1px;
`;

export const TopThreeDataContent = styled.span`
  margin-bottom: 5px;
`;

export const TopThreePoint = styled.span`
  font-size: 16px;
  letter-spacing: -1px;
`;

export const RankListDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;

export const RankHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  color: white;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -1px;
`;

export const RankUserDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 42px;
  margin-top: 5px;
  border: 1px solid #ebebeb;
  background-color: whitesmoke;
  font-size: 14px;
  letter-spacing: -1px;
`;

export const RankNumber = styled.span`
  width: 10%;
`;

export const RankNickname = styled.span`
  width: 30%;
`;

export const RankWinningCount = styled.span`
  width: 20%;
`;

export const RankPlayCount = styled.span`
  width: 20%;
`;

export const RankAver = styled.span`
  width: 20%;
`;

export const InfiniteDiv = styled.div`
  width: 100%;
  height: 50px;
`;
