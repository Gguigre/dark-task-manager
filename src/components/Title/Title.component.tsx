import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: theme.colors.white,
  },
});

export const Title: FC<{}> = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
