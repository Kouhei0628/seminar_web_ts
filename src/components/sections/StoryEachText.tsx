import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const StoryEachText = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "-50px",
    triggerOnce: true,
  });
  return (
    <FadeIn ref={ref} className={`${inView ? "inview" : ""}`}>
      {children}
    </FadeIn>
  );
};
export default StoryEachText;

const FadeIn = styled.span`
  display: inline-block;
  visibility: hidden;
`;
