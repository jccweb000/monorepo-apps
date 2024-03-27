import { I18nStore } from './store';
import { Lang } from './types';

const prevLang = localStorage.getItem('i18nextLng');

console.log('prevLang', prevLang);

export const i18nStore = new I18nStore((prevLang || 'zh-CN') as Lang);
