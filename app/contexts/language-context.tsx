"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import textsEn from "../../lang/data-texts-en";
import textsFr from "../../lang/data-texts-fr";

type Language = "en" | "fr";

const LanguageContext = createContext({
  language: "en" as Language,
  texts: textsEn,
  toggleLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  const texts = language === "en" ? textsEn : textsFr;

  return (
    <LanguageContext.Provider value={{ language, texts, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
