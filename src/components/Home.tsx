import { createContext, useEffect, useRef, useState } from "react";
import FixNavigation from "./FixNavigation";
import Loading from "./Loading";
import Main from "./Main";

export const RefContext = createContext(null);
export const SetRefContext = createContext(null);
export const LoadingContext = createContext(null);

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, setRef] = useState(null);
  const elmRef = useRef(null);

  elmRef.current = ref;
  const newRef = elmRef.current;

  // ページ内スクロール
  useEffect(() => {
    const newElm: HTMLElement = document.getElementById(newRef)!;
    if (!newElm) return;
    const time = window.setTimeout(() => {
      window.scrollTo({
        top: newElm.offsetTop,
        behavior: "smooth",
        left: 0,
        threshold: 0,
      });
    }, 1);
    return () => window.clearTimeout(time);
  }, [newRef]);
  return (
    <LoadingContext.Provider value={[isLoaded, setIsLoaded]}>
      <RefContext.Provider value={newRef}>
        <SetRefContext.Provider value={setRef}>
          <Loading />
          <FixNavigation style={fixStyle} />
          <Main />
        </SetRefContext.Provider>
      </RefContext.Provider>
    </LoadingContext.Provider>
  );
};
export default Home;

const fixStyle = {
  transform: "translateZ(1000px)",
};
