import React from "react";
import styled from "styled-components";
import Header from '../../components/header/Header';

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 1000px;
  min-width: 1000px;
  overflow-y: hidden;
`;

const MainBackground = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 680px;
  margin-top: -55px;
  background-color: #005fcc;
  z-index: -1;
`;


const RankPage = () => {

    return (
        <Wrap>
          <Header receiveLink={'/rank'} />
          <MainBackground></MainBackground>
        </Wrap>
    );
  };

export default RankPage;
