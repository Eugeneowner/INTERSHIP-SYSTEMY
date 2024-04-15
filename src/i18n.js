import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

import order_ru from "./languages/ru/order"
import order_ua from "./languages/ua/order"
import order_pl from "./languages/pl/order"

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: {
        order: { 
            ...order_ru
        }
      },
    },
    ua: {
      translation: {
        order: { 
            ...order_ua
        }
      },
    },
    pl: {
      translation: {
        order: { 
            ...order_pl
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
