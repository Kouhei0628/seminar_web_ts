import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import navImages from "../../data/mainNav-img";
import { PubUrl } from "../../data/PubUrl";
import { SetRefContext } from "../Home";

const Navigation = () => {
  const setRef = useContext(SetRefContext);
  return (
    <NavigationStyle>
      <NavListWrap>
        <NaviList>
          {navImages.map(ni => (
            <li key={ni.id}>
              <button
                onClick={() => setRef(ni.ref)}
                style={{ width: "100%", height: "100%" }}>
                <Link to={`/#${ni.ref}`}>
                  <NavIcon
                    className='nav-icon'
                    src={`${PubUrl}/img/navigation/nav_${ni.ref}.png`}
                    alt={ni.alt}
                  />
                </Link>
              </button>
            </li>
          ))}
        </NaviList>
      </NavListWrap>
    </NavigationStyle>
  );
};
export default Navigation;

const NavigationStyle = styled.nav`
  position: relative;
  width: 100%;
  height: 280px;
  margin: 0px auto;
  @media (max-width: 629px) {
    display: none;
  }
  @media (min-width: 750px) {
    margin: 0 auto;
  }
  @media (min-width: ${breakpoints.l}) {
    margin: 200px auto 0 auto;
  }
`;
const NavListWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
`;
const NaviList = styled.ul`
  position: relative;
  margin: 80px auto;
  width: min(80%, 670px);
  height: 100%;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 45px;
  li {
    position: absolute;
    z-index: 2;
    margin: 0;
    max-width: 137px;
    height: 137px;
    border-radius: 50%;
    &:hover {
      transition: all 0.2s linear;
      transform: scale(1.1);
      img {
        transition: all 0.2s linear;
        filter: drop-shadow(0 0 15px black);
      }
    }
    &:nth-child(1),
    &:nth-child(6) {
      &:hover {
        transform: scale(1.1) translateY(-70%);
      }
    }
    &:nth-child(1) {
      left: 0;
      top: 50%;
      transform: translateY(-70%) scale(1);
    }
    &:nth-child(2) {
      left: 25%;
      top: 0%;
    }
    &:nth-child(3) {
      left: 55%;
      top: 0%;
    }
    &:nth-child(4) {
      bottom: 0;
      left: 25%;
    }
    &:nth-child(5) {
      bottom: 0;
      left: 55%;
    }
    &:nth-child(6) {
      top: 50%;
      right: 0;
      transform: translateY(-70%) scale(1);
    }
  }
`;
const NavIcon = styled.img`
  max-width: 130px;
  height: auto;
`;
