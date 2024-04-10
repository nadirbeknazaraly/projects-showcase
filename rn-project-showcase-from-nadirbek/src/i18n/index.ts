import { en } from './en';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

export const defaultNS = 'ns1';

i18next
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        ns1: en,
      },
    },
    fallbackLng: 'en',
    defaultNS,
  })
  .then(() => {});

export default i18next;
