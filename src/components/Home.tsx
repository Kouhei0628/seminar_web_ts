import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import FixNavigation from "./FixNavigation";
import Loading from "./Loading";
import Main from "./Main";

export const RefContext = createContext<string>("");
export const SetRefContext = createContext<Dispatch<SetStateAction<string>>>(
  () => {}
);
export const LoadingContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);

const Home: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [ref, setRef] = useState<string>("");

  // ページ内スクロール
  useEffect(() => {
    const newElm: HTMLElement = document.getElementById(ref)!;
    if (!newElm) return;
    const time: number = window.setTimeout(() => {
      window.scrollTo({
        top: newElm.offsetTop,
        behavior: "smooth",
        left: 0,
      });
    }, 1);
    return () => window.clearTimeout(time);
  }, [ref]);
  return (
    <LoadingContext.Provider value={[isLoaded, setIsLoaded]}>
      <RefContext.Provider value={ref}>
        <SetRefContext.Provider value={setRef}>
          <Loading />
          <FixNavigation />
          <Main />
        </SetRefContext.Provider>
      </RefContext.Provider>
    </LoadingContext.Provider>
  );
};
export default Home;
