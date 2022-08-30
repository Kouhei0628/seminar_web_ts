import styled from "styled-components";
import { breakpoints } from "../../breakpoints/breakpoints";
import members from "../../data/members";
import MemberListItem from "./MemberListItem";

const MembersContent = () => {
  return (
    <MemContent>
      <MembersList>
        {members.map((m, i) => (
          <MemberListItem key={i} id={m.id} name={m.name} />
        ))}
      </MembersList>
    </MemContent>
  );
};
export default MembersContent;

const MemContent = styled.div`
  margin-top: 30px;
`;

const MembersList = styled.ul`
  padding: 0;
  margin: 0 auto;
  width: 90%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: ${breakpoints.l}) {
    width: 58%;
  }
`;
