import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from '../Title';
import { theme } from '../../theme';

interface SectionPropsType {
  title: string;
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacings.huge,
  },
  titleContainer: {
    marginBottom: theme.spacings.medium,
  },
});

export const Section: FC<SectionPropsType> = ({ title, children }) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Title>{title}</Title>
    </View>
    {children}
  </View>
);
