import React from 'react';
import { render, act } from 'react-native-testing-library';
import { ChangeLanguage } from '../ChangeLanguage';
import I18n from 'i18n-js';

jest.mock('i18n-js', () => ({
  locale: 'fr',
  currentLocale: () => 'fr',
  t: {
    cache: {
      clear: jest.fn(),
    },
  },
}));

describe('ChangeLanguage component', () => {
  it('should have a button to go to the Login', async () => {
    const cheatCodes = render(<ChangeLanguage />);
    const Picker = cheatCodes.getByTestId('changeLanguagePicker');

    act(() => {
      Picker.props.onValueChange('en');
    });

    expect(I18n.locale).toBe('en');
    // eslint-disable-next-line  @typescript-eslint/ban-ts-ignore
    // @ts-ignore Todo: Update I18n typings
    expect(I18n.t.cache.clear).toHaveBeenCalled();
  });

  it('should call the onLanguageChange callback', async () => {
    const onLanguageChange = jest.fn();
    const cheatCodes = render(<ChangeLanguage onLanguageChange={onLanguageChange} />);

    const Picker = cheatCodes.getByTestId('changeLanguagePicker');
    act(() => {
      Picker.props.onValueChange('en');
    });

    expect(onLanguageChange).toHaveBeenCalled();
  });
});
