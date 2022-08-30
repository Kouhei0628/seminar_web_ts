import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
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

const Home = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [ref, setRef] = useState<string>("");
  const elmRef = useRef<string>("");

  elmRef.current = ref;
  const newRef = elmRef.current;
  // ページ内スクロール
  useEffect(() => {
    const newElm = document.getElementById(newRef)!;
    if (!newElm) return;
    const time = window.setTimeout(() => {
      window.scrollTo({
        top: newElm.offsetTop,
        behavior: "smooth",
        left: 0,
        // threshold: 0,
      });
    }, 1);
    return () => window.clearTimeout(time);
  }, [newRef]);
  return (
    <LoadingContext.Provider value={[isLoaded, setIsLoaded]}>
      <RefContext.Provider value={newRef}>
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
