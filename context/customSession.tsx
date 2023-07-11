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
  selectedOrg?: Org;
  setCustomSession: (session: SessionType, org?: Org) => void;
}

interface Org {
  id: string;
  name: string;
}

const CustomSessionContext = createContext<ContextProps>({
  customSession: null,
  selectedOrg: null,
  setCustomSession: (session: SessionType, org?: Org) => null,
});

export const CustomSessionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [customSession, setState] = useState(null);
  const [selectedOrg, setSelectedOrg] = useState<Org>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const session = window.localStorage.getItem("session");
      if (session) {
        setState(JSON.parse(session));
      }

      const org = window.localStorage.getItem("selectedOrg");
      if (org) {
        setSelectedOrg(JSON.parse(org));
      }
    }
  }, [customSession]);

  const setCustomSession = (session: SessionType, org?: Org) => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("session", JSON.stringify(session));

      if (org) {
        window.localStorage.setItem("selectedOrg", JSON.stringify(org));
      } else {
        window.localStorage.removeItem("selectedOrg");
      }
    }
  };

  return (
    <CustomSessionContext.Provider
      value={{ customSession, selectedOrg, setCustomSession }}
    >
      {children}
    </CustomSessionContext.Provider>
  );
};

export const useCustomSession = () => useContext(CustomSessionContext);
