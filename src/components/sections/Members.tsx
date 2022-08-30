import styled from "styled-components";
import { colors } from "../../data/colors";
import { PubUrl } from "../../data/PubUrl";
import HeaderOrn from "../ornaments/HeaderOrn";
import MembersContent from "./MembersContent";
import { CloudTop, CloudWrap } from "./Summary";

const Members = () => {
  return (
    <MembersSection>
      <CWrap>
        <CTop />
        <MembersWrap id='members'>
          <HeaderOrn logo='members' />
          <MembersContent />
        </MembersWrap>
      </CWrap>
    </MembersSection>
  );
};
export default Members;

const MembersSection = styled.section`
  margin: -42px auto 0 auto;
  width: 100vw;
  text-align: center;
  @media (min-width: 940px) {
    margin: -252px auto 0 auto;
  }
`;
const CWrap = styled(CloudWrap)``;
const CTop = styled(CloudTop)`
  background-image: url(${PubUrl}/img/members/members_bg-top.png);
`;
const MembersWrap = styled.div`
  margin-top: -80px;
  width: 100%;
  background-color: ${colors.membersBg};
  padding-bottom: 140px;
`;
