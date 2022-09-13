import styled from "styled-components";
import { PubUrl } from "../../data/PubUrl";

type Props = {
  logo: string;
};

const HeaderOrn: React.FC<Props> = ({ logo }) => {
  return (
    <HeaderWrap>
      <HeaderImg
        src={`${PubUrl}/img/logos/logo_${logo}-000.svg`}
        alt={`${logo}のロゴ`}
      />
    </HeaderWrap>
  );
};
export default HeaderOrn;

const HeaderWrap = styled.div`
  margin: 0 auto;
  width: calc(171px + 3vw);
  background-image: url(${PubUrl}/img/common_ribbon.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: calc(68px + 3vw);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateZ(0);
`;

const HeaderImg = styled.img`
  height: 35%;
  transform: translateY(-7px);
`;
