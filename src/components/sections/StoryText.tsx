import styled from "styled-components";
import StoryEachText from "./StoryEachText";

const StoryText: React.FC = () => {
  return (
    <TextWrap>
      <StoryEachText key={1}>私はヴェルスラミナに通う生徒。</StoryEachText>
      <br className='text-sep' />
      <br className='text-sep' />
      <StoryEachText key={2}>
        ヴェルスラミナとは
        <br />
        アトミシアに復讐を目論む
        <br />
        組織アウロラが運営している
        <br />
        怪盗を育成するための施設。
      </StoryEachText>
      <br className='text-sep' />
      <br className='text-sep' />
      <StoryEachText key={3}>
        実力が認められ、アウロラから
        <br />
        届く入団試験に合格すると
        <br />
        怪盗団に所属し
        <br />
        怪盗として暗躍することとなる。
      </StoryEachText>
      <br className='text-sep' />
      <br className='text-sep' />
      <StoryEachText key={4}>
        ある日私が授業を終え
        <br />
        ヴェルスラミナの寄宿舎に帰ると
        <br />
        一通の封筒が届いていた。
      </StoryEachText>
      <br className='text-sep' />
      <br className='text-sep' />
      <StoryEachText key={5}>
        中を見てみるとゼニス号の乗車券と
        <br />
        一枚の書類が入っており
        <br />
        書類には入団試験の内容が書かれていた。
      </StoryEachText>
      <br className='text-sep' />
      <br className='text-sep' />
      <StoryEachText key={6}>
        入団試験の内容はゼニス号に乗り込み
        <br />
        アトミシアの貴族から
        <br />
        政府の情報または
        <br />
        財産を盗むことだった。
      </StoryEachText>
    </TextWrap>
  );
};
export default StoryText;

const TextWrap = styled.p`
  width: 100%;
  height: 100%;
  display: inline-block;
  font-size: calc(9px + 0.5vw);
  font-weight: 700;
  .text-sep {
    display: block;
    content: "";
    margin: 10px 0;
  }
`;
