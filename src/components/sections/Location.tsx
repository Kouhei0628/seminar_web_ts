import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import { PubUrl } from "../../data/PubUrl";
import HeaderOrn from "../ornaments/HeaderOrn";

const Location: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  return (
    <LocationSection ref={ref} id='location'>
      <HeaderOrn logo='location' />
      <LocationFlexWrap>
        <div>
          <LocationText>
            <h4>バス乗り場 横浜線相原駅 徒歩2分</h4>
          </LocationText>
          <LocationMap className={`${inView ? "visible" : ""}`}>
            <img
              src={`${PubUrl}/img/location/loc_1.png?ver=1.0.0`}
              alt='バス乗り場から教室までの道のり'
            />
          </LocationMap>
        </div>
        <div>
          <LocationText>
            <h4>東京造形大学８号館２階「８−２０６」教室</h4>
          </LocationText>
          <LocationAdress>
            <p>〒192-0992 東京都八王子市宇津貫町１５５６</p>
          </LocationAdress>
          <LocationMap className={`${inView ? "visible" : ""}`}>
            <img
              src={`${PubUrl}/img/location/loc_2.png?ver=1.0.0`}
              alt='東京造形大学全体図'
            />
          </LocationMap>
        </div>
      </LocationFlexWrap>
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
    width: 89%;
  }
  @media (min-width: 940px) {
    margin: -252px auto 0 auto;
  }
`;
const LocationFlexWrap = styled.div`
  @media (min-width: 790px) {
    display: flex;
    gap: 12px;
  }
`;
const LocationText = styled.div`
  background-image: url(${PubUrl}/img/location/loc_txtbg.svg?ver=1.0.0);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  padding: 4vw 0;
  color: white;
  @media (min-width: ${breakpoints.m}) {
    width: 80%;
  }
  h4 {
    margin: 0;
    font-size: 3.5vw;
    @media (min-width: ${breakpoints.m}) {
      font-size: 2.5vw;
    }
    @media (min-width: 790px) {
      font-size: 1.5vw;
    }
    @media (min-width: ${breakpoints.l}) {
      font-size: 1.2vw;
    }
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
    @media (min-width: ${breakpoints.l}) {
      font-size: calc(5px + 0.5vw);
    }
  }
`;
const LocationMap = styled.div`
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
  filter: blur(15px);
  width: 90%;
  img {
    width: 100%;
  }
  &.visible {
    animation: mapFadeIn 1.9s linear forwards;
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
