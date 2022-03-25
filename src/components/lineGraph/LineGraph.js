import React, { useEffect, useState, useRef, createContext } from "react";
import {
  GraphChartDiv,
  GraphTitleDiv,
  GraphTitleSpan,
  GraphCanvas,
} from "./LineGraph.style";

const LineGraph = ({ speedRankList, itemRankList }) => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();
  const [averRank, setAverRank] = useState();

  useEffect(() => {
    const canvas = canvasRef.current;
    setCtx(canvas?.getContext("2d"));
  }, []);

  useEffect(() => {
    if (ctx) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      const tickY = 20;
      //   const tickX = 0.64;
      const tickX = 15.7;
      let sum = 0;
      let x = 12;
      let y = 5 + speedRankList[0] * tickY;

      for (let i = 1; i <= 8; i++) {
        ctx.fillStyle = "black";
        ctx.font = "normal bold 12px sans-serif";
        ctx.fillText(i, 0, 9 + i * tickY);

        ctx.beginPath();
        ctx.moveTo(10, 5 + i * tickY);
        ctx.lineTo(800, 5 + i * tickY);
        ctx.strokeStyle = "#ccc";
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(x, y, 2, 0, 2 * Math.PI);
      ctx.fillStyle = "#07f";
      ctx.fill();

      speedRankList.map((elem) => {
        sum += elem;
        ctx.moveTo(x, y);
        ctx.lineTo(x + tickX, 5 + elem * tickY);
        ctx.strokeStyle = "#07f";
        ctx.lineWidth = 1;

        ctx.stroke();

        ctx.beginPath();
        ctx.arc(x + tickX, 5 + elem * tickY, 2, 0, 2 * Math.PI);
        ctx.fillStyle = "#07f";

        ctx.fill();

        x = x + tickX;
        y = 5 + elem * tickY;
      });

      if (speedRankList.length) {
        setAverRank((sum / speedRankList.length).toFixed(2));
      } else {
        setAverRank(0);
      }
    }
  }, [ctx, speedRankList, itemRankList]);
  console.log(averRank);

  return (
    <>
      <GraphTitleDiv>
        <span style={{ marginLeft: "20px" }}>순위 변동 추이</span>
        {averRank !== 0 ? (
          <GraphTitleSpan>최근 50경기 평균 순위 {averRank}위</GraphTitleSpan>
        ) : (
          <GraphTitleSpan>최근 경기가 없습니다.</GraphTitleSpan>
        )}
      </GraphTitleDiv>
      <GraphChartDiv>
        <GraphCanvas ref={canvasRef} width={800} height={170} />
      </GraphChartDiv>
    </>
  );
};

export default LineGraph;
