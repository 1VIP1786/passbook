import { createContext, useContext, useState } from "react";

export const Context = createContext<any>(null);

export function StateProvider({ children }) {
  const [familyData, setFamilyData] = useState();
  const [locale, setLocale] = useState("hi");
  const [modaleOpen, setModaleOpen] = useState(false);
  return (
    <Context.Provider
      value={{
        familyData,
        setFamilyData,
        locale,
        setLocale,
        modaleOpen,
        setModaleOpen,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useStateContext() {
  return useContext(Context);
}
