import ReactNative from 'react-native';
import I18n from 'react-native-i18n';

import en from '../locales/en.json';
import hi from '../locales/hi.json';
import ar from '../locales/ar.json';

I18n.fallbacks = true;

I18n.translations = {
    en,
    hi,
    ar
};

const currentLocale = I18n.currentLocale();


export const isRTL = currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

ReactNative.I18nManager.allowRTL(isRTL);

export function strings(name, params = {}){
    return I18n.t(name,params);
};

export function changeLocal(language){
    I18n.locale = language;
}

export default I18n;