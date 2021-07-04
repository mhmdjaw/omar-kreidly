import { useEffect, useState } from "react";
import { CursorType, State } from "./global-provider-types";

const useGlobalProvider = () => {
  const [state, setState] = useState<State>({ cursorType: "unhovered" });

  useEffect(() => {
    document.body.style.visibility = "visible";

    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onCursor = (cursorType: CursorType) => {
    setState({ cursorType });
  };

  return { cursorType: state.cursorType, onCursor };
};

export default useGlobalProvider;
