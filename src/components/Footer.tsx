import React from "react";
import styled from "styled-components";
import { breakpoints } from "../breakpoints/breakpoints";
import { PubUrl } from "../data/PubUrl";
import FooterCloud from "./FooterCloud";

const Footer = React.memo(() => {
  return (
    <FooterWrap className='footer'>
      <FooterInner>
        <FooterCloud />
        <FooterSl>
          <div></div>
        </FooterSl>
      </FooterInner>
    </FooterWrap>
  );
});
export default Footer;

const FooterWrap = styled.div`
  width: 100%;
  height: calc(220px + 8vw);
  overflow: hidden;
  position: absolute;
  bottom: 0;
  z-index: 3;
`;
const FooterInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const FooterSl = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: visible;
  & > div {
    background-image: url(${PubUrl}/img/footer/foot_sl.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center bottom;
    transform: scale(1.7);
    transform-origin: center bottom;
    width: 100%;
    height: 100%;
    @media (min-width: ${breakpoints.m}) {
      background-size: contain;
      transform: scale(1);
    }
  }
`;
