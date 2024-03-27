import { makeAutoObservable, runInAction } from 'mobx';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './lang/en.json';
import zh from './lang/zh.json';
import { Lang } from './types';

const resources = {
  en: {
    translation: en,
  },
  zh: {
    translation: zh,
  },
};

export class I18nStore {
  constructor(initLang: Lang | undefined = 'zh-CN') {
    makeAutoObservable(this);
    this.currentLang = initLang;
    this.init();
  }

  // 这里有个坑，其实这个字段是一定存在的，但是如果不初始化赋值 undefined, 更新时，不会触发组件的更新
  currentLang?: Lang = undefined;

  init = () => {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources,
        fallbackLng: this.currentLang,
        interpolation: {
          escapeValue: false,
        },
      });
  };

  changeLang = (l: Lang) => {
    runInAction(() => {
      i18n.changeLanguage(l);
      this.currentLang = l;
    });
  };
}
