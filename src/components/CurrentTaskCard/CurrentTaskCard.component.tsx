import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme';
import { Card } from '../Card';
import { StopButton } from '../StopButton';
import { Subtitle } from '../Subtitle';
import { Task } from '../../redux/Tasks/reducer';

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  dataContainer: {
    flex: 1,
  },
  spentTime: {
    fontSize: 36,
    color: theme.colors.accent,
    fontWeight: 'bold',
    marginTop: theme.spacings.small,
  },
  CTAContainer: { alignItems: 'center', justifyContent: 'center' },
});

export const CurrentTaskCard: FC<{ currentTask: Task }> = ({ currentTask }) => {
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const now = new Date();
    const { startTime } = currentTask;

    const hours = Math.floor(Math.abs(now - startTime) / 36e5);
    const minutes = Math.floor((Math.abs(now - startTime) / 60e3) % 60);
    const seconds = Math.floor((Math.abs(now - startTime) / 1e3) % 60);
    setCountdown({ hours, minutes, seconds });
  });

  const { hours, minutes, seconds } = countdown;

  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <Subtitle>{currentTask.title}</Subtitle>
          <Text style={styles.spentTime}>{`${hours}:${minutes}:${seconds}`}</Text>
        </View>
        <View style={styles.CTAContainer}>
          <StopButton />
        </View>
      </View>
    </Card>
  );
};
