import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import { PubUrl } from "../../data/PubUrl";
import HeaderOrn from "../ornaments/HeaderOrn";

const Location = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <LocationSection ref={ref} id='location'>
      <HeaderOrn logo='location' />
      <LocationTextA>
        <p>バス乗り場 横浜線相原駅 徒歩2分</p>
      </LocationTextA>
      <LocationMap className={`${inView ? "visible" : ""}`}>
        <img
          src={`${PubUrl}/img/location/loc_1.png?ver=1.0.0`}
          alt='バス乗り場から教室までの道のり'
        />
      </LocationMap>
      <LocationTextA>
        <p>東京造形大学８号館２階「８−２０６」教室</p>
      </LocationTextA>
      <LocationAdress>
        <p>〒192-0992 東京都八王子市宇津貫町１５５６</p>
      </LocationAdress>
      <LocationMap>
        <img
          src={`${PubUrl}/img/location/loc_2.png?ver=1.0.0`}
          alt='東京造形大学全体図'
        />
      </LocationMap>
    </LocationSection>
  );
};
export default Location;

const LocationSection = styled.section`
  transform: translateZ(0);
  margin: -110px auto 0 auto;
  width: 100%;
  text-align: center;
  overflow: hidden;
  @media (min-width: ${breakpoints.m}) {
    width: 59%;
  }
  @media (min-width: 940px) {
    margin: -252px auto 0 auto;
  }
`;
const LocationTextA = styled.div`
  background-image: url(${PubUrl}/img/location/loc_txtbg.svg?ver=1.0.0);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  padding: 10px;
  color: white;
  @media (min-width: ${breakpoints.m}) {
    width: 78%;
  }
  p {
    margin: 0;
    font-size: 12px;
  }
`;
const LocationAdress = styled.div`
  width: 82%;
  height: 50px;
  margin: 10px auto 0 auto;
  background-image: url(${PubUrl}/img/location/loc_txtbg2-2.svg?ver=1.0.0);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${breakpoints.m}) {
    background-image: url(${PubUrl}/img/location/loc_txtbg2.svg?ver=1.0.0);
  }
  p {
    font-size: 12px;
  }
`;
const LocationMap = styled.div`
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
  width: 90%;
  img {
    width: 100%;
  }
  &.visible {
    animation: mapFadeIn 1s linear forwards;
    @keyframes mapFadeIn {
      0% {
        filter: blur(15px);
      }
      100% {
        filter: blur(0);
      }
    }
  }
`;
