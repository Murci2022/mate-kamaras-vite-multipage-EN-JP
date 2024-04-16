# install

Mate Kamaras - vite - multypage - with routing/translation

## Benchmarkemail accounts

Matheos(matheos.k.yamaguchi@gmail.com) google account (English newsletter)
https://ui.benchmarkemail.com/signupform/fullembed/design?s=1758458

Mate(matekamaras1976@gmail.com) google account (Japanese newsletter)
https://ui.benchmarkemail.com/signupform/fullembed/design?s=1758457

https://reactrouter.com/en/main/start/overview

- mkdir <project-name>
- cd <project-name>
- code .
- npm create vite@latest
- npm i
- git init
- npm run dev
- npm install react-router-dom
- npm install react-icons
- npm install i18next react-i18next i18next-browser-languagedetector

- create folder container / in src
- create folder components / in src

project/
└── src/
├── assets/
│ ├── images/(import images)
│
├── components/
│ ├── Navbar/
│ │ └── Navbar.jsx
│ ├── Subheading/
│ │ └── SubHeading.jsx
│ ├── Footer/
│ │ └── Footer.jsx
│ ├── 01MatesWord/
│ │ └── MatesWord.jsx(components in 01Hero page)
│ ├── 01/Awards
│ │ └── Awards.jsx(components in 01Hero page)
│ └── ...
├── constants/
│ ├── data.js (all arrays with data to render)
| ├── images/(collect images)
│ └── index.jsx(export: images,data,video)
├── container/
│ ├── Hero.jsx
│ ├── About.jsx
│ └── ...
├── locales/
│ ├── en/
│ │ └── translation.json
│ ├── jp/
│ │ └── translation.json
│ └── ...
├── App.jsx
├── App.css
├── i18n.js
├── index.css
└── main.jsx

- import I18nextProvider and I18next and wrap the App.jsx with
  import { I18nextProvider } from 'react-i18next';
  import i18next from 'i18next'; // Import your i18n configuration

 <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>

-------------------ADD i18n.js to the "root"
// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enJson from './locales/en/translation.json';
import jpJson from './locales/jp/translation.json';

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
resources: {
en: { translation: enJson },
jp: { translation: jpJson },
},

    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },

});

export default i18n;
in src ├── locales/
│ ├── en/
│ │ └── translation.json
│ ├── jp/
│ │ └── translation.json

in the translation.json:
--------------en:
{
"nav": {
"home": "home",
"about": "about",
"shop": "shop",
"contact": "Contact",
"newsletter": "newsletter",
"paintings": "paintings"
},
"hero": {
"subhead": "Singer/Painter",
"name": "Matè",
"fname": "Kamaras",
"desc": " Dedicated to bringing stories to life through the power of music and story telling. With a blend of dedication, creativity, he strives to captivate the audiences and leave a lasting impression.",
"news": "news"
},
"newsletter": {
"lng": "en"
}
}
------------jp:
{
"nav": {
"home": "home",
"about": "about",
"shop": "shop",
"contact": "Contact",
"newsletter": "newsletter",
"paintings": "paintings"
},
"hero": {
"subhead": "シンガー/ペインター",
"name": "マテ",
"fname": "カマラス",
"desc": "音楽と物語の力を通じて物語を生き生きとさせることに専念しています。献身、創造性、そして彼は観客を魅了し、強烈な印象を残すことを目指しています。",
"news": "ニュース"
},
"newsletter": {
"lng": "jp"
}
}

setup main.jsx
import {BrowserRouter } from react-router-dom

-wrap App.jsx with <BrowserRouter> in main.jsx
<React.StrictMode>
<BrowserRouter>
<I18nextProvider i18n={i18next}>
<App />
</I18nextProvider>
</BrowserRouter>
</React.StrictMode>

setup App.jsx
import {Routes, Route } from react-router-dom

- copy index.css, App.css

-copy Navbar folder
