import styled from "styled-components";

export const SummaryDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 34%;
  height: 100%;
  border: 1px solid #f2f2f2;
`;

export const ScoreDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 15px;
  font-family: Noto Sans KR;
  font-weight: bold;
  letter-spacing: -1px;
  color: black;
`;

export const ScoreSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-right: 20px;
`;

export const DonutChartDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96%;
  height: 100%;
  border-top: 1px solid #ccc;
`;

export const DonutChartInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
`;

export const BaseDonutChart = styled.div`
  display: flex;
  position: relative;
  width: 125px;
  height: 125px;
  border-radius: 50%;
  background: ${(props) =>
    `conic-gradient(${props.color} ${props.degree}deg, #ebebeb ${props.degree}deg)`};
`;

export const FillDonutChart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: white;
`;

export const DonutChartTitle = styled.p`
  color: black;
  letter-spacing: -1px;
`;

export const PercentText = styled.p`
  font-size: 24px;
`;

export const WinningRate = styled.div`
  width: 34%;
  height: 100%;
  color: #07f;
  margin-top: 5px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: whitesmoke whitesmoke whitesmoke whitesmoke;
`;

export const CompletionRate = styled.div`
  width: 34%;
  height: 100%;
  color: #9bd728;
  margin-top: 5px;
  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: whitesmoke whitesmoke whitesmoke whitesmoke;
`;

export const RetireRate = styled.div`
  width: 34%;
  height: 100%;
  color: #f52459;
  margin-top: 5px;

  border-width: 0px 1px 1px 1px;
  border-style: solid;
  border-color: whitesmoke whitesmoke whitesmoke whitesmoke;
`;
