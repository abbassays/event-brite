import { SessionType } from "@/types";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";

interface ContextProps {
  customSession: SessionType;
  setCustomSession: (session: SessionType) => void;
}

const CustomSessionContext = createContext<ContextProps>({
  customSession: null,
  setCustomSession: (session: SessionType) => null,
});

export const CustomSessionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [customSession, setState] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const session = window.localStorage.getItem("session");
      if (session) {
        setState(JSON.parse(session));
      }
    }
  }, []);

  const setCustomSession = (session: SessionType) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("session", JSON.stringify(session));
    }
  };

  return (
    <CustomSessionContext.Provider value={{ customSession, setCustomSession }}>
      {children}
    </CustomSessionContext.Provider>
  );
};

export const useCustomSession = () => useContext(CustomSessionContext);
