import { createContext, useContext, useState } from "react";

export const Context = createContext<any>(null);

export function StateProvider({ children }) {
  const [familyData, setFamilyData] = useState();
  const [locale, setLocale] = useState("en");
  return (
    <Context.Provider value={{ familyData, setFamilyData, locale, setLocale }}>
      {children}
    </Context.Provider>
  );
}

export function useStateContext() {
  return useContext(Context);
}
