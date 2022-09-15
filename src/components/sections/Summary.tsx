import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import { colors } from "../../data/colors";
import { PubUrl } from "../../data/PubUrl";
import summaries from "../../data/summaries";
import HeaderOrn from "../ornaments/HeaderOrn";
import { StCloudTop } from "./Story";

const Summary: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
  return (
    <SummarySection>
      <CloudWrap>
        <CloudTop />
        <SummWrap id='summary'>
          <HeaderOrn logo='summary' />
          <SummaryMessage ref={ref} className={`${inView ? "visible" : ""}`} />
          <SummaryContents>
            <SummaryList>
              {summaries.map(summary => (
                <li key={summary.id}>
                  <SumImg
                    nth={summary.id}
                    className={`${inView ? "visible" : ""}`}
                    src={`${PubUrl}/img/summary/sum_${summary.img}.svg`}
                    alt={`${summary.alt}の画像`}
                  />
                  <Title>
                    <p>{summary.title}</p>
                  </Title>
                  <Description className='summary-desc'>
                    {summary.description}
                  </Description>
                </li>
              ))}
            </SummaryList>
          </SummaryContents>
        </SummWrap>
        <CloudBottom />
      </CloudWrap>
    </SummarySection>
  );
};
export default Summary;

const SummarySection = styled.section`
  margin: 0px auto;
  width: 100vw;
  @media (min-width: 940px) {
    margin: -252px auto 0 auto;
  }
`;
const CloudWrap = styled.div`
  width: 100%;
  overflow-y: visible;
  overflow-x: hidden;
`;
const CloudTop = styled(StCloudTop)`
  background-image: url(${PubUrl}/img/summary/summary_bg-top.png);
`;
const CloudBottom = styled(StCloudTop)`
  background-image: url(${PubUrl}/img/summary/summary_bg-bottom.png);
`;
const SummWrap = styled.div`
  background-color: ${colors.summaryBg};
  margin-top: -30px;
  margin-bottom: -80px;
`;
const SummaryList = styled.ul`
  transform: translateZ(0);
  padding: 0;
  margin: 0 auto;
  width: 90%;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  li {
    width: 45%;
    overflow: hidden;
    @media (min-width: ${breakpoints.m}) {
      width: 20%;
    }
    &:nth-child(1),
    :nth-child(2) {
      .summary-desc {
        p {
          font-size: 3.5vw;
          @media (min-width: ${breakpoints.m}) {
            font-size: 1.3vw;
          }
        }
      }
    }
  }
  @media (min-width: ${breakpoints.m}) {
    transform: translateY(-50px);
    width: 84%;
  }
`;
const SumImg = styled.img`
  width: 100%;
  transform: translateX(100%);
  margin-bottom: 15px;
  &.visible {
    animation: slideIn 1.5s ease-in-out forwards
      ${({ nth }: { nth: number }) => 0.5 + nth * 0.1}s;
    @keyframes slideIn {
      0% {
        opacity: 0;
        transform: translateX(100%);
      }
      70% {
        opacity: 1;
        transform: translateX(0%) rotate(0deg);
      }
      80% {
        transform: rotate(-10deg);
      }
      90% {
        transform: rotate(10deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
  }
`;

const SummaryMessage = styled.div`
  transform: translateZ(0);
  background-image: url(${PubUrl}/img/summary/summary-mess_bg.png?ver=1.0.0);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 2s ease-in-out;
  &.visible {
    opacity: 1;
  }
  @media (min-width: 508px) {
    height: calc(250px + 8vw);
  }
  @media (min-width: ${breakpoints.m}) {
    height: calc(250px + 8vw);
  }
`;

const SummaryContents = styled.div`
  margin: -50px auto 0 auto;
  width: 100%;
  @media (min-width: ${breakpoints.m}) {
    width: 90%;
  }
`;
const Title = styled.div`
  background-image: url(${PubUrl}/img/common_titlebg.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  p {
    margin: 0;
    color: white;
    display: inline-block;
    transform: translateY(-1px);
  }
`;
const Description = styled.div`
  background-image: url(${PubUrl}/img/summary/sum_descbg.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: calc(25px + 10vw);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  p {
    margin: 0;
    font-size: 9px;
    width: max(87%, 150px);
    font-weight: 600;
    span {
      color: #c30000;
    }
    @media (min-width: 377px) {
      font-size: 12px;
    }
    @media (min-width: ${breakpoints.m}) {
      font-size: 9px;
    }
    @media (min-width: 1018px) {
      font-size: 12px;
    }
  }
  @media (min-width: ${breakpoints.m}) {
    height: calc(15px + 5vw);
  }
`;

export { CloudWrap, CloudTop, CloudBottom };
