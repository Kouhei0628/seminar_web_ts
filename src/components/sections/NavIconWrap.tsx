import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import { colors } from "../../data/colors";
import navImages from "../../data/mainNav-img";
import { PubUrl } from "../../data/PubUrl";
import { RefContext, SetRefContext } from "../Home";

const FixNavListItem = ({ itemRef, alt }) => {
  const [isSelected, setIsSelected] = useState(false);
  const vRef = useContext(RefContext);
  const setRef = useContext(SetRefContext);
  const oCScroll = _ref => setRef(_ref);

  useEffect(() => {
    if (itemRef === vRef) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [itemRef, vRef]);
  return (
    <FixNavListItemS className={`${isSelected ? "visible" : ""}`}>
      <Link onClick={() => oCScroll(itemRef)} to={`/#${itemRef}`}>
        <NavIconWrap>
          <NavIcon
            className={`navicon`}
            src={`${PubUrl}/img/navigation/fix/fix_${itemRef}.png?ver=1.0.0`}
            alt={`${alt}`}
          />
        </NavIconWrap>
      </Link>
    </FixNavListItemS>
  );
};
export default FixNavListItem;

const FixNavListItemS = styled.li`
  width: calc(100% / ${navImages.length});
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: ${colors.bgBrown};
  transition: all 0.3s ease-in-out;
  a {
    margin: 0 auto;
    text-align: center;
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: ${breakpoints.m}) {
  }
  .navicon {
    width: 100%;
  }
  &:nth-of-type(1) {
    .navicon {
      width: 70%;
    }
  }
  &:nth-of-type(3) {
    .navicon {
      height: 100%;
    }
  }
  &:nth-of-type(6) {
    .navicon {
      width: 70%;
    }
  }
  &.visible {
    transform: scale(0.95);
    filter: brightness(50%);
  }
`;
const NavIcon = styled.img`
  width: 100%;
`;
const NavIconWrap = styled.div`
  width: 100%;
`;
