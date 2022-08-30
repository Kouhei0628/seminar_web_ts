import styled from "styled-components";
import { PubUrl } from "../../data/PubUrl";

const HeaderOrn = ({ logo }: { logo: string }) => {
  return (
    <HeaderWrap>
      <HeaderImgA>
        <HeaderImgB
          src={`${PubUrl}/img/logos/logo_${logo}-000.svg`}
          alt={`${logo}のロゴ`}
        />
      </HeaderImgA>
    </HeaderWrap>
  );
};
export default HeaderOrn;

const HeaderWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: 171px;
`;

const HeaderImgA = styled.div`
  background-image: url(${PubUrl}/img/common_ribbon.png);
  background-repeat: no-repeat;
  background-size: cover;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderImgB = styled.img`
  height: 35%;
  transform: translateY(-2px);
`;
