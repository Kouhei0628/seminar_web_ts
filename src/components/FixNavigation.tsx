import { useEffect, useState } from "react";
import { useMedia } from "use-media";
import { breakpoints } from "../breakpoints/breakpoints";
import { PubUrl } from "../data/PubUrl";
import navImages from "../data/mainNav-img";
import { colors } from "../data/colors";
import { userAgentFlags } from "../data/userAgentFlags";
import styled from "styled-components";
import FixNavListItem from "./sections/NavIconWrap";

const FixNavigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isNarrow = useMedia({ minWidth: breakpoints.m });

  const toggleVisibility = (): void => {
    const UA = userAgentFlags;
    // 1200pxスクロールしたら表示する
    if (!isNarrow) {
      // for mobile
      window.scrollY > 650 ? setIsVisible(true) : setIsVisible(false);
      if (
        window.scrollY >
        document.getElementById("root")!.getBoundingClientRect().bottom * 3
      )
        setIsVisible(false);
    } else {
      if (UA.youScrollToBottom) {
        // for narrow desktop
        setIsVisible(true);
        window.scrollY > 1000 ? setIsVisible(true) : setIsVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  });

  const twiLink = "https://twitter.com/kaishizemi2022";

  return (
    <div>
      <FixSNSIcon className={`${isVisible ? "visible" : ""}`}>
        <a href={twiLink} target={`_blank`} rel='noreferrer'>
          <img
            src={`${PubUrl}/img/navigation/fix/fix_twitter.svg`}
            alt={`Twitterアイコン`}
          />
        </a>
      </FixSNSIcon>
      <FixWrap className={`fix-nav ${isVisible ? "visible" : ""}`}>
        <FixNavList>
          {navImages.map(ni => (
            <FixNavListItem key={ni.id} itemRef={ni.ref} alt={ni.alt} />
          ))}
        </FixNavList>
      </FixWrap>
    </div>
  );
};
export default FixNavigation;

const FixSNSIcon = styled.div`
  position: fixed;
  bottom: calc(58px + 10vw);
  right: 13px;
  width: 68px;
  height: 68px;
  z-index: 400;
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  transform: translateX(100%) rotate(90deg);
  &.visible {
    opacity: 0.8;
    visibility: visible;
    transform: translateX(0) rotate(0deg);
  }
  button {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
    }
  }
  @media (min-width: ${breakpoints.m}) {
    display: none;
  }
`;
const FixWrap = styled.div`
  position: -webkit-fixed;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 400;
  height: calc(53px + 10vw);
  width: 100%;
  background-color: ${colors.summaryBg};
  visibility: hidden;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  transform: translateY(100%);
  transform-origin: top;
  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  @media (min-width: ${breakpoints.m}) {
    display: none;
  }
`;
const FixNavList = styled.ul`
  list-style: none;
  padding: 4px;
  margin: 0;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 12px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 5px;
`;
