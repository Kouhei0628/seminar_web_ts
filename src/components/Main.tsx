import styled from "styled-components";
import Story from "./sections/Story";
import Thieves from "./sections/Thieves";
import Summary from "./sections/Summary";
import Location from "./sections/Location";
import Members from "./sections/Members";
import Navigation from "./sections/Navigation";
import Hidden from "./sections/Hidden";

import Footer from "./Footer";
import Header from "./Header";
import Ornaments from "./ornaments/Ornaments";
import React from "react";

const Main = React.memo(() => {
  return (
    <main style={mainStyle} className='main'>
      <Header />
      <MainWrap className='main__wrap'>
        <Navigation id='navigation' />
        <UnderNavi className='under-navi'>
          <Ornaments />
          <Story />
          <Thieves />
          <Summary />
          <Location />
          <Members />
          <Hidden />
          <Footer />
        </UnderNavi>
      </MainWrap>
    </main>
  );
});
export default Main;

const UnderNavi = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const mainStyle = {
  textAlign: "center",
  position: "relative",
  width: "100%",
  height: "100%",
};

const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
