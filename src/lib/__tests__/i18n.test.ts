import { findBestAvailableLanguage } from 'react-native-localize';
import { i18n, setI18nConfig } from '../i18n';

const translations = {
  myFlag: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    what_is_your_name: 'What is your name ?',
    inbox: {
      one: 'You have 1 message',
      zero: 'You have no messages',
      other: 'You have {{count}} messages',
    },
  },
  fr: {
    // eslint-disable-next-line @typescript-eslint/camelcase
    what_is_your_name: "Comment tu t'appelles ?",
    inbox: {
      one: 'Tu as 1 message',
      zero: "Tu n'as aucun messages",
      other: 'Tu as {{count}} messages',
    },
  },
};

describe('i18n', () => {
  describe('t', () => {
    it('translates with the given flag', () => {
      findBestAvailableLanguage = jest.fn(() => ({ languageTag: 'myFlag', isRTL: false }));
      setI18nConfig();
      i18n.translations = translations;
      expect(findBestAvailableLanguage).toHaveBeenCalled();
      expect(i18n.t('what_is_your_name')).toEqual('What is your name ?');
      expect(i18n.t('inbox', { count: 0 })).toEqual('You have no messages');
      expect(i18n.t('inbox', { count: 1 })).toEqual('You have 1 message');
      expect(i18n.t('inbox', { count: 234 })).toEqual('You have 234 messages');
    });
    it('fallback to french translation', () => {
      findBestAvailableLanguage = jest.fn(() => undefined);
      setI18nConfig();
      i18n.translations = translations;
      expect(findBestAvailableLanguage).toHaveBeenCalled();
      expect(i18n.t('what_is_your_name')).toEqual("Comment tu t'appelles ?");
      expect(i18n.t('inbox', { count: 1 })).toEqual('Tu as 1 message');
      expect(i18n.t('inbox', { count: 0 })).toEqual("Tu n'as aucun messages");
      expect(i18n.t('inbox', { count: 234 })).toEqual('Tu as 234 messages');
    });
  });
});
