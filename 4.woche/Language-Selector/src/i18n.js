import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/en.json";
import trTranslation from "./locales/tr/tr.json";
import deTranslation from "./locales/de/de.json";

const resources = {
  en: { translation: enTranslation },
  tr: { translation: trTranslation },
  de: { translation: deTranslation },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector) // Tarayıcı dilini algılar
  .init({
    resources,
    fallbackLng: "en", // Eğer belirlenen dil yoksa İngilizceyi kullan
    interpolation: { escapeValue: false }, // React içinde güvenli kullanım
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"], // Algılama sırası
      caches: ["cookie"],
    },
  });

export default i18n;
