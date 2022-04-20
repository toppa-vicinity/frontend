import React from "react";
interface GlobalContextType {
  setCredentials: React.Dispatch<React.SetStateAction<string>> | undefined;
}
export const GlobalContext = React.createContext<GlobalContextType>({
  setCredentials: undefined,
});
