import React from "react";
import { Message } from "./components/ChatRow";
interface GlobalContextType {
  setCredentials: React.Dispatch<React.SetStateAction<string>> | undefined;
}
export const GlobalContext = React.createContext<GlobalContextType>({
  setCredentials: undefined,
});
