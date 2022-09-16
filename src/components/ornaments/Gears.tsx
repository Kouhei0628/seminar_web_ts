import styled from "styled-components";
import { PubUrl } from "../../data/PubUrl";

type Props = {
  isLeft?: boolean;
};

const Gears: React.FC<Props> = ({ isLeft }) => {
  const random = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  // 歯車の位置
  const positionX: number = random(10, 80);
  const positionY: number = random(10, 50);
  // 大きさ
  const size: number = random(40, 250);
  // 種類
  const type: number = random(1, 18);
  // 回転速度
  const speed: number = random(55, 78);
  return (
    <>
      <GearWrap
        positionX={positionX}
        isLeft={isLeft}
        size={size}
        positionY={positionY}>
        <GearObj type={type} speed={speed}></GearObj>
      </GearWrap>
    </>
  );
};
export default Gears;

type GearProps = {
  size?: number;
  positionY?: number;
  positionX?: number;
  isLeft?: boolean;
  type?: number;
  speed?: number;
};

const GearWrap = styled.div.attrs((pr: GearProps) => ({
  style: {
    width: `${pr.size}px`,
    height: `${pr.size}px`,
    marginTop: `-${pr.positionY}px`,
    transform: `translateX(${pr.isLeft ? "-" : ""}${pr.positionX}%)`,
  },
}))<GearProps>`
  overflow: visible;
`;

const GearObj = styled.div.attrs((pr: GearProps) => ({
  style: {
    animation: `gearRotate ${pr.speed}s linear infinite`,
    backgroundImage: `url(${PubUrl}/img/gears/gear_${pr.type}.svg?ver=1.0.0)`,
  },
}))<GearProps>`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  @keyframes gearRotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;
