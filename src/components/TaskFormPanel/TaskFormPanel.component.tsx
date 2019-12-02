import React from 'react';
import { StyleSheet, View } from 'react-native';
import { theme } from '../../theme';
import { Section } from '../Section';

const styles = StyleSheet.create({
  slidingPanelContainer: {
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: theme.spacings.medium,
    borderTopRightRadius: theme.spacings.medium,
    paddingVertical: theme.spacings.medium,
    paddingHorizontal: theme.spacings.large,
  },
  draggingCTA: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.accent,
    alignSelf: 'center',
  },
  form: {
    marginTop: theme.spacings.large,
  },
});

export const TaskFormPanel = () => {
  return (
    <View style={styles.slidingPanelContainer}>
      <View style={styles.draggingCTA} />
      <View style={styles.form}>
        <Section title="Title"></Section>
        <Section title="Tags"></Section>
      </View>
    </View>
  );
};
