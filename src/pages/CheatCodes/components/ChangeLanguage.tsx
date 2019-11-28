import React, { useState } from 'react';
import { Picker, StyleSheet } from 'react-native';
import I18n from 'i18n-js';

interface Props {
  onLanguageChange?: () => void;
}

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 100,
  },
});

export const ChangeLanguage = (props: Props) => {
  const [language, setLanguage] = useState(I18n.currentLocale());

  return (
    <Picker
      testID="changeLanguagePicker"
      selectedValue={language}
      style={styles.picker}
      onValueChange={value => {
        I18n.locale = value;
        setLanguage(value);

        if (props.onLanguageChange) {
          props.onLanguageChange();
        }

        // eslint-disable-next-line  @typescript-eslint/ban-ts-ignore
        // @ts-ignore Todo: Update I18n typings
        return I18n.t.cache.clear();
      }}
    >
      <Picker.Item label="FR" value="fr" />
      <Picker.Item label="EN" value="en" />
    </Picker>
  );
};
