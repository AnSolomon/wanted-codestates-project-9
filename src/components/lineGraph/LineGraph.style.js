import styled from "styled-components";

export const GraphTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: -1px;
  color: black;
`;

export const GraphTitleSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
  margin-right: 20px;
`;

export const GraphChartDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96%;
  height: 100%;
  border-top: 1px solid #ccc;
`;

export const GraphCanvas = styled.canvas`
  background-color: white;
  z-index: 1;
`;
