import styled from "styled-components";
import { breakpoints } from "../breakpoints/breakpoints";
import { PubUrl } from "../data/PubUrl";

const FooterCloud = () => {
  const twitterLink = "https://twitter.com/kaishizemi2022";
  return (
    <FooterCloudWrap>
      <a href={twitterLink} target='_blank' rel='noreferrer'>
        <div>
          <img
            src={`${PubUrl}/img/footer/foot_twitter.svg`}
            alt={`Twitterロゴ`}
          />
          <span>@kaishizemi2022</span>
        </div>
      </a>
    </FooterCloudWrap>
  );
};
export default FooterCloud;

const FooterCloudWrap = styled.div`
  background-image: url(${PubUrl}/img/footer/foot_smoke.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin: 0 auto;
  position: absolute;
  display: none;
  top: 0;
  left: 50%;
  z-index: 1;
  a {
    margin: 0 auto;
    display: block;
    text-decoration: none;
    color: #5a5a5a;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(20px);
    img {
      width: 15px;
      margin-right: 7px;
    }
    span {
      display: inline-block;
      font-size: 15px;
      font-weight: 100;
      transform: translateY(-2px);
    }
  }
  @media (min-width: ${breakpoints.m}) {
    display: flex;
    width: 100%;
    height: 75px;
    transition: all 0.2s ease-in-out;
    transform: translate(calc(-40% - 5vw), calc(250% - 10vw));
    &:hover {
      transform: translate(calc(-40% - 5vw), calc(250% - 10vw)) scale(1.1);
    }
  }
  @media (min-width: 918px) {
    width: 100%;
    height: 75px;
    transition: all 0.2s ease-in-out;
    transform: translate(calc(-45% - 5vw), calc(250% - 10vw));
    &:hover {
      transform: translate(calc(-45% - 5vw), calc(250% - 10vw)) scale(1.1);
    }
  }
  @media (min-width: ${breakpoints.l}) {
    width: 530px;
    height: 95px;
    transform: translate(-50%, calc(200% - 10vw));
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translate(-50%, calc(200% - 10vw)) scale(1.1);
    }
  }
`;
