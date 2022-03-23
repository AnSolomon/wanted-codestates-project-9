import React from "react";
import Header from '../../components/header/Header';
import {
  Wrap,
  MainBackground,
} from "./RankPage.style";

const RankPage = () => {

    return (
        <Wrap>
          <Header receiveLink={'/rank'} />
          <MainBackground></MainBackground>
        </Wrap>
    );
  };

export default RankPage;
