import { createContext, useContext, useState } from "react";

export const Context = createContext<any>(null);

export function StateProvider({ children }) {
  const [familyData, setFamilyData] = useState();
  return (
    <Context.Provider value={{ familyData, setFamilyData }}>
      {children}
    </Context.Provider>
  );
}

export function useStateContext() {
  return useContext(Context);
}
