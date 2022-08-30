import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import members from "../../data/members";
import { PubUrl } from "../../data/PubUrl";

const MemberListItem = ({ id, name }) => {
  const { ref, inView } = useInView({
    root: null,
    threshold: 1,
    rootMargin: "0px 0px 0px 0px",
    triggerOnce: true,
  });

  return (
    <MemberListItemS id={id} ref={ref}>
      <div className='list-wrap'>
        <ImageWrap>
          <MembersGear
            src={`${PubUrl}/img/members/mem_icon.svg`}
            alt={`歯車`}
          />
          <MemberIcon
            src={`${PubUrl}/img/members/member/m-${id}.jpg`}
            alt={`${name}`}
          />
        </ImageWrap>
        <MemberNameS className={`${inView ? "show" : ""}`}>{name}</MemberNameS>
      </div>
    </MemberListItemS>
  );
};
export default MemberListItem;

const multipleOf5 = members
  .filter(m => m.id % 5 === 0 || (m.id + 1) % 5 === 0)
  .map(
    m =>
      `
    &:nth-child(${m.id}) {
      width: calc(100% / 2);
      justify-content: flex-${m.id % 5 === 0 ? "start" : "end"};
      .list-wrap {
        width: auto;
        p {
          ${
            m.id % 5 === 0
              ? "left: 0; transform: translateX(65px);"
              : "right: unset;"
          }
        }
      }
      @media (max-width: 298px) {
        width: 100%;
        .list-wrap {
          p {
            left: 40%;
            right: unset;
            transform: translateX(0);
          }
        }
      }
      @media (max-width: 377px) {
        justify-content: center;
        width: 50%;
      }
      @media (min-width: 377px) {
        p {
          transform: translateX(${
            (m.id + 1) % 5 === 0 ? "calc(-38px + 18vw)" : "0"
          });
        }
      }
      @media (min-width: ${breakpoints.l}) {
        width: calc(100% / 5);
        justify-content: center;
        .list-wrap p {
          ${
            m.id % 5 === 0
              ? "left: 40%; transform: translateX(0)"
              : "right: initial; transform: translateX(0);"
          }
          
        }
      }
    }`
  );

const MemberListItemS = styled.li`
  width: 33%;
  margin-bottom: 19px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  @media (max-width: 297px) {
    width: 100%;
  }
  @media (max-width: 377px) {
    width: 50%;
  }
  @media (min-width: ${breakpoints.m}) {
    width: calc(100% / 5);
  }
  @media (max-width: ${breakpoints.m}) {
    ${multipleOf5}
  }
  &.inview {
    transform: translateY(-50px);
  }
`;

const MembersGear = styled.img`
  width: 68%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
`;
const MemberIcon = styled.img`
  width: 33%;
  position: absolute;
  top: 45px;
  left: 37%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  z-index: 4;
`;
const ImageWrap = styled.div`
  position: relative;
  width: 150px;
  height: 110px;
`;

const MemberNameS = styled.p`
  position: absolute;
  z-index: 6;
  bottom: 16px;
  left: 40%;
  right: initial;
  font-size: 12px;
  font-weight: 600;
  color: white;
  opacity: 0;
  &.show {
    animation: textIn 1s ease-in-out forwards;
    @keyframes textIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;
