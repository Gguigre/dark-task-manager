import { I18nManager } from 'react-native';
import { findBestAvailableLanguage } from 'react-native-localize';
import memoize from 'lodash.memoize';
import I18nJS, { TranslateOptions, Scope } from 'i18n-js';
import translations from '../translations';

const translate = memoize(
  (key: Scope, config: TranslateOptions | undefined): string => I18nJS.translate(key, config),
  (key: Scope, config: TranslateOptions | undefined): string =>
    config ? JSON.stringify(key) + JSON.stringify(config) : JSON.stringify(key)
);
I18nJS.t = translate;

export const setI18nConfig = (): void => {
  // fallback if no available language fits
  const fallback = { languageTag: 'fr', isRTL: false };

  const { languageTag, isRTL } = (findBestAvailableLanguage(Object.keys(translations)) ||
    fallback) as { languageTag: keyof typeof translations; isRTL: boolean };

  // clear translation cache
  if (translate.cache.clear) {
    translate.cache.clear();
  }

  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  I18nJS.translations = translations;
  I18nJS.locale = languageTag;
};

export const i18n = I18nJS;
