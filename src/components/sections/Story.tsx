import styled from "styled-components";
import { colors } from "../../data/colors";
import { PubUrl } from "../../data/PubUrl";
import HeaderOrn from "../ornaments/HeaderOrn";
import StoryText from "./StoryText";

const Story = () => {
  return (
    <StorySection>
      <CloudWrapper>
        <StCloudTop />
        <StoryWrap id='story'>
          <HeaderOrn logo='story' />
          <StoryContent>
            <StoryText />
          </StoryContent>
        </StoryWrap>
        <StCloudBottom />
      </CloudWrapper>
    </StorySection>
  );
};
export default Story;

const StorySection = styled.section`
  margin: 56px auto;
  width: 100vw;
  margin-top: 0px;
`;

const StoryWrap = styled.div`
  margin: -85px 0 -85px 0;
  background-color: ${colors.storyBg};
`;

const CloudWrapper = styled.div`
  width: 100%;
  margin-bottom: 28px;
  margin-right: auto;
  margin-left: auto;
`;

export const StCloudTop = styled.div`
  background-image: url(${PubUrl}/img/story/story_bg-top.png?ver=1.0.0);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(200px + 20vw);
  img {
    width: 100%;
    transform: rotate(180deg);
  }
`;
const StCloudBottom = styled(StCloudTop)`
  background-image: url(${PubUrl}/img/story/story_bg-bottom.png?ver=1.0.0);
`;

const StoryContent = styled.div`
  background-image: url(${PubUrl}/img/story/story_bg.png?ver=1.0.0);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 90px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateZ(0deg);
`;
