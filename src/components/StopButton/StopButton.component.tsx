import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { theme } from '../../theme';

interface StopButtonPropsType {
  onPress?: () => void;
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    height: 48,
    width: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopIcon: {
    height: 16,
    width: 16,
    borderRadius: 3,
    backgroundColor: theme.colors.accent,
  },
});

export const StopButton: FC<StopButtonPropsType> = ({ onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.stopIcon}></View>
  </TouchableOpacity>
);
