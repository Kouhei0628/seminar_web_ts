import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import { colors } from "../../data/colors";
import { PubUrl } from "../../data/PubUrl";
import HeaderOrn from "../ornaments/HeaderOrn";
// import TimeComp from "./TimeComp";

const Hidden = () => {
  return (
    <HiddenSection id='hidden'>
      <HeaderOrn logo='hidden' />
      <HeaderDescWrap>
        <p>CS祭終了後に解放されます。</p>
        {/* <p>
          解放まであと <TimeComp />
        </p> */}
      </HeaderDescWrap>
    </HiddenSection>
  );
};
export default Hidden;

const HiddenSection = styled.div`
  margin: 0 auto;
  padding-bottom: 80px;
  width: 100%;
  background-color: ${colors.membersBg};
`;
const HeaderDescWrap = styled.div`
  margin: 0 auto;
  margin-top: 70px;
  margin-bottom: 380px;
  transform: translateZ(0);
  background-image: url(${PubUrl}/img/hidden/hidden_descbg_s.svg);
  @media (min-width: ${breakpoints.m}) {
    background-image: url(${PubUrl}/img/hidden/hidden_descbg.svg);
  }
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 80%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    font-size: 13px;
    color: #ce2424;
    @media (min-width: ${breakpoints.m}) {
      font-size: 15px;
    }
  }
`;
