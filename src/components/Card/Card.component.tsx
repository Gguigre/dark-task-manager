import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.foreground,
    padding: theme.spacings.medium,
    borderRadius: theme.spacings.medium,
  },
});

export const Card: FC<{}> = ({ children }) => <View style={styles.card}>{children}</View>;
