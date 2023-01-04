import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { IText } from "../types";




import { EngData, EstData, RusData} from "./languageContext.data";

interface LanguageContextType {
  text: IText;
  lang: string;
  onChangeLang: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType>(
  {} as LanguageContextType,
);


const LanguageProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const [lang, setLang] = useState<string>("Eng");
  const [text, setText] = useState<IText>({});

  const onChangeLang = (language: string): void => {

    setLang(language);
  };

  const getLanguage = useCallback(() => {

    switch (lang) {
      case "Eng":
        setText(EngData);
        break;
      case "Rus":
        setText(RusData);
        break;
      case "Est":
        setText(EstData);
        break;
      default:
        setText(EngData);
        break;
    }

    // if (lang === "Eng") {
    //   console.log("dddd", lang)
    //   setText(EngData);
    // }
    // else {
    //   setText(EstData);
    // }
  }, [lang]);

  useEffect(() => getLanguage(), [getLanguage, lang]);
  const value = useMemo(() => ({ text, lang, onChangeLang }), [text]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
      </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  return useContext(LanguageContext);
};

export default LanguageProvider;
