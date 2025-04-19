import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../locales/en.json';
import pt from '../locales/pt.json';

const savedLanguage = localStorage.getItem('locale') || 'en';

export const availableLanguages = ['en', 'pt'];

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            pt: { translation: pt },
        },
        lng: savedLanguage,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;