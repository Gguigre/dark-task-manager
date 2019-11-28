import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
});

export const Subtitle: FC<{}> = ({ children }) => {
  return <Text style={styles.subtitle}>{children}</Text>;
};
