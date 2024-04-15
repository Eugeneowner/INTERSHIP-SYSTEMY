import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import order_ru from "./languages/ru/order";
import order_ua from "./languages/ua/order";
import order_pl from "./languages/pl/order";

import plan_ru from "./languages/ru/plan";
import plan_ua from "./languages/ua/plan";
import plan_pl from "./languages/pl/plan";

import nav_ru from "./languages/ru/nav"
import nav_ua from "./languages/ua/nav"
import nav_pl from "./languages/pl/nav"

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        order: {
          ...order_ru,
        },
        plan: {
          ...plan_ru,
        },
        nav: { 
          ...nav_ru
        }
      },
    },
    ua: {
      translation: {
        order: {
          ...order_ua,
        },
        plan: {
          ...plan_ua,
        },
        nav: { 
          ...nav_ua
        }
      },
    },
    pl: {
      translation: {
        order: {
          ...order_pl,
        },
        plan: {
          ...plan_pl,
        },
        nav: { 
          ...nav_pl
        }
      },
    },
  },
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});
