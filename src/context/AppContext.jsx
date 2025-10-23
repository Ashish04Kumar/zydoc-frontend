import { createContext, useContext } from "react";



export const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  
  // If someone tries to use context without Provider, throw an error
  if (!context) {
    throw new Error("❌ useAppContext must be used inside AppContextProvider");
  }

  return context;
};
