import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import thieves from "../../data/coats";
import { PubUrl } from "../../data/PubUrl";
import HeaderOrn from "../ornaments/HeaderOrn";

const Thieves: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <ThievesSection id='thieves'>
      <HeaderOrn logo='thieves' />
      <Subtitle>
        <h3>怪盗団とは</h3>
      </Subtitle>
      <ThievesDescr>
        <p className={`${inView ? "inview" : ""}`}>
          フェルミアはアトミシアとの侵略戦争に敗北した。
          <br />
          <br />
          才能をもった科学者たちはアトミシアの貴族に囚われ、貴族の元で新しい発明に貢献することを余儀なくされてしまった。
          <br />
          <br />
          アトミシア貴族に恨みをもつフェルミアの一族は組織「アウロラ」を形成し
          <br />
          怪盗団を運営することでアトミシアへの復讐を目論んだ。
        </p>
      </ThievesDescr>
      <ThievesContent>
        <ThievesList ref={ref}>
          {thieves.map(thief => (
            <li key={thief.id}>
              <ThieveImg
                nth={thief.id}
                className={`${inView ? "visible" : ""}`}
                src={`${PubUrl}/img/thieves/thieves_emb${thief.id}.jpg`}
                alt={thief.alt}
              />
              <ThievesName>
                <p>{thief.name}</p>
              </ThievesName>
            </li>
          ))}
        </ThievesList>
      </ThievesContent>
    </ThievesSection>
  );
};
export default Thieves;

const ThievesSection = styled.section`
  width: 100%;
  height: 100%;
  margin: -165px auto;
  transform: translateZ(0);
  @media (min-width: ${breakpoints.m}) {
    width: 74%;
  }
`;

const Subtitle = styled.div`
  background-image: url(${PubUrl}/img/thieves/thieves_titlebg.svg);
  background-position: center;
  background-repeat: no-repeat;
  margin: 20px auto;
  height: calc(11px + 3vw);
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: calc(10px + 1vw);
    margin: 0;
    color: white;
    transform: translateY(-1px);
  }
`;
const ThievesDescr = styled.div`
  br {
    display: block;
    content: "";
    margin: 8px 0;
  }
  background-image: url(${PubUrl}/img/thieves/thieves_descbg-s.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: calc(214px + 9vw);
  width: 88%;
  margin: 0 auto;
  padding: 8px 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    color: #ffeecf;
    font-size: 12px;
    width: calc(95% - 2vw);
    display: inline-block;
    visibility: hidden;
    opacity: 0;
    &.inview {
      animation: textIn2 1s ease-in forwards 0.4s;
    }
    @keyframes textIn2 {
      0% {
        opacity: 0;
        visibility: hidden;
        clip-path: inset(0 0 100% 0);
      }
      100% {
        opacity: 1;
        visibility: visible;
        clip-path: inset(0 0 0 0);
      }
    }
  }
  @media (min-width: 383px) {
    height: calc(280px + 9vw);
    p {
      font-size: 13px;
    }
  }
  @media (min-width: 450px) {
    background-image: url(${PubUrl}/img/thieves/thieves_descbg-m.svg);
    width: 85%;
    height: calc(114px + 9vw);
    p {
      font-size: 11px;
      width: calc(100% - 11vw);
    }
  }
  @media (min-width: 527px) {
    width: 70%;
  }
  @media (min-width: 620px) {
    width: 80%;
  }
  @media (min-width: 800px) {
    height: 200px;
    /* max-width: 500px; */
  }
  @media (min-width: ${breakpoints.l}) {
    height: calc(156px + 3vw);
    background-image: url(${PubUrl}/img/thieves/thieves_descbg-l.svg);
    p {
      font-size: 12px;
    }
  }
`;
const ThievesContent = styled.div`
  background-image: url(${PubUrl}/img/thieves/thieves_listbg-m.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 27px auto;
  padding: 5px 0px;
  height: 100%;
  width: 86%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${breakpoints.m}) {
    width: 90%;
    background-image: url(${PubUrl}/img/thieves/thieves_listbg-l.svg);
  }
  @media (min-width: ${breakpoints.l}) {
    background-image: url(${PubUrl}/img/thieves/thieves_listbg-xl.svg);
  }
`;
const ThievesList = styled.ul`
  padding: 0;
  margin: 20px auto;
  width: 91%;
  height: 95%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  @media (min-width: ${breakpoints.m}) {
    width: 80%;
  }
  @media (min-width: ${breakpoints.l}) {
    width: 70%;
  }
  li {
    width: 40%;
    @media (min-width: ${breakpoints.m}) {
      width: 20%;
    }
    .card {
    }
  }
`;
const ThieveImg = styled.img`
  width: 100%;
  opacity: 0;
  &.visible {
    animation: rotate3d 1.1s ease-in-out forwards
      ${({ nth }: { nth: number }) => nth * 0.2}s;
    @keyframes rotate3d {
      0% {
        opacity: 0;
        transform: perspective(1000px) rotateY(-360deg) scale(0.5);
      }
      50.1% {
        opacity: 0.5;
        transform: perspective(1000px) rotateY(-180deg) scale(0.75);
      }
      100% {
        opacity: 1;
        transform: perspective(1000px) rotateY(0deg) scale(1);
      }
    }
  }
`;
const ThievesName = styled.div`
  background-image: url(${PubUrl}/img/common_titlebg.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: 7px;
  height: calc(20px + 1vw);
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    color: white;
    font-size: calc(7px + 0.5vw);
    font-weight: 800;
    @media (min-width: ${breakpoints.m}) {
      font-size: calc(6px + 0.35vw);
    }
  }
`;
