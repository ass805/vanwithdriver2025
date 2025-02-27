import { Globe } from "lucide-react";
import { useTranslation } from "@/utils/useTranslation";
import { useNavigate } from "react-router-dom";

export const LanguageToggle = () => {
  const { language, setLanguage } = useTranslation();
  const navigate = useNavigate();

  const languages = {
    lt: "Lithuanian",
    en: "English",
    ru: "Russian"
  };

  const handleLanguageChange = () => {
    const langs = Object.keys(languages);
    const currentIndex = langs.indexOf(language);
    const nextIndex = (currentIndex + 1) % langs.length;
    const newLang = langs[nextIndex] as "lt" | "en" | "ru";
    setLanguage(newLang);
    navigate(`/${newLang}`);
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center gap-2 min-w-[44px] min-h-[44px]"
      aria-label={`Change language. Current language: ${languages[language]}`}
    >
      <Globe className="h-5 w-5" aria-hidden="true" />
      <span>{language.toUpperCase()}</span>
    </button>
  );
};