"use client";

import React, { createContext, useContext, ReactNode } from "react";
import textsEn from "../../lang/data-texts-en";

const LanguageContext = createContext({
  texts: textsEn,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LanguageContext.Provider value={{ texts: textsEn }}>
      {children}
    </LanguageContext.Provider>
  );
};
