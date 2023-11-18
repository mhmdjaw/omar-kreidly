import React, { createContext, useContext } from "react";
import { GlobalContext, State } from "./global-provider-types";
import useGlobalProvider from "./GlobalProvider.State";

// Define the context
const globalContext = createContext<State | null>(null);

interface GlobalProviderProps {
  children: React.ReactNode
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }: GlobalProviderProps) => {
  const global = useGlobalProvider();

  return (
    <globalContext.Provider value={global}>{children}</globalContext.Provider>
  );
};

// Custom hooks to use dispatch and state
export const useGlobalContext = (): GlobalContext =>
  useContext(globalContext) as GlobalContext;
