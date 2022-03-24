import React from "react";
import {
  SummaryDiv,
  ScoreDiv,
  ScoreSpan,
  DonutChartDiv,
  WinningRate,
  DonutChartTitle,
  DonutChartInner,
  BaseDonutChart,
  FillDonutChart,
  PercentText,
  CompletionRate,
  RetireRate,
} from "./DonutChart.style";

const DonutChart = ({
  chartTitle,
  totalMatchCount,
  winningCount,
  retireCount,
}) => {
  return (
    <SummaryDiv>
      <ScoreDiv>
        <span style={{ marginLeft: "20px" }}>{chartTitle}</span>
        <ScoreSpan>
          {totalMatchCount}전 {winningCount}승 {totalMatchCount - winningCount}
          패
        </ScoreSpan>
      </ScoreDiv>
      <DonutChartDiv>
        <WinningRate>
          <DonutChartTitle>승률</DonutChartTitle>
          <DonutChartInner>
            <BaseDonutChart
              color="#07f"
              degree={
                totalMatchCount === 0
                  ? 0
                  : ((winningCount / totalMatchCount) * 360).toFixed(1)
              }
            >
              <FillDonutChart>
                <PercentText>
                  {totalMatchCount === 0
                    ? 0
                    : ((winningCount / totalMatchCount) * 100).toFixed(1)}
                  %
                </PercentText>
              </FillDonutChart>
            </BaseDonutChart>
          </DonutChartInner>
        </WinningRate>
        <CompletionRate>
          <DonutChartTitle>완주율</DonutChartTitle>
          <DonutChartInner>
            <BaseDonutChart
              color="#9BD728"
              degree={
                totalMatchCount === 0
                  ? 0
                  : ((1 - retireCount / totalMatchCount) * 360).toFixed(1)
              }
            >
              <FillDonutChart>
                <PercentText>
                  {totalMatchCount === 0
                    ? 0
                    : ((1 - retireCount / totalMatchCount) * 100).toFixed(1)}
                  %
                </PercentText>
              </FillDonutChart>
            </BaseDonutChart>
          </DonutChartInner>
        </CompletionRate>
        <RetireRate>
          <DonutChartTitle>리타이어율</DonutChartTitle>
          <DonutChartInner>
            <BaseDonutChart
              color="#f52459"
              degree={
                totalMatchCount === 0
                  ? 0
                  : ((retireCount / totalMatchCount) * 360).toFixed(1)
              }
            >
              <FillDonutChart>
                <PercentText>
                  {totalMatchCount === 0
                    ? 0
                    : ((retireCount / totalMatchCount) * 100).toFixed(1)}
                  %
                </PercentText>
              </FillDonutChart>
            </BaseDonutChart>
          </DonutChartInner>
        </RetireRate>
      </DonutChartDiv>
    </SummaryDiv>
  );
};

export default DonutChart;
