import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("hi")}>हिन्दी</button>
      <button onClick={() => changeLanguage("bn")}>বাংলা</button>
    </div>
  );
};

export default LanguageSwitcher;
