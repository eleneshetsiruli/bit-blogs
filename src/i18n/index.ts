import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import homePageKa from "../i18n/ka/pages/home.json";
import homePageEn from "../i18n/en/pages/home.json";

import loginPageKa from "../i18n/ka/pages/login.json";
import loginPageEn from "../i18n/en/pages/login.json";

import signUpPageKa from "../i18n/ka/pages/signUp.json";
import signUpPageEn from "../i18n/en/pages/signUp.json";

import LanguageDetector from "i18next-browser-languagedetector";

const options = {
  order: ["path", "subdomain"],
  lookupQuerystring: "lang",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources: {
      ka: {
        translation: {
          "home-page": homePageKa,
          "login-page": loginPageKa,
          "sign-up": signUpPageKa,
        },
      },

      en: {
        translation: {
          "home-page": homePageEn,
          "login-page": loginPageEn,
          "sign-up": signUpPageEn,
        },
      },
    },

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
