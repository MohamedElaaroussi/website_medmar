import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import common_fr from './translations/fr/fr.json'; // Vos fichiers de traduction
import common_en from './translations/en/en.json';
import common_ar from './translations/ar/ar.json';
<<<<<<< HEAD
// import { Provider } from 'react-redux';
// import store from './Redux/store';
=======
import { ProSidebarProvider } from "react-pro-sidebar";
// import { BrowserRouter } from "react-router-dom";

// import { ProSidebarProvider } from "react-pro-sidebar";


>>>>>>> dev-Mohamed

i18n
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: common_en },
      fr: { translation: common_fr },
      ar: { translation: common_ar },
    },
    fallbackLng: 'fr', // Langue par défaut
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
<<<<<<< HEAD
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
=======
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
>>>>>>> dev-Mohamed
  </I18nextProvider>
  ,
  document.getElementById('root')
);
