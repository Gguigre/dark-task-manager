import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { theme } from '../../theme';
import { useSelector, useDispatch } from 'react-redux';
import { currentTaskSelector } from '../../redux/Tasks/selector';
import { action } from 'typesafe-actions';

interface StopCurrentTaskButtonPropsType {
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

export const StopCurrentTaskButton: FC<StopCurrentTaskButtonPropsType> = ({ onPress }) => {
  const currentTask = useSelector(currentTaskSelector);
  const dispatch = useDispatch();
  const onButtonPress = () => {
    if (currentTask) {
      dispatch(action('STOP_CURRENT_TASK'));
    }
    onPress && onPress();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onButtonPress}>
      <View style={styles.stopIcon}></View>
    </TouchableOpacity>
  );
};
