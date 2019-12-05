import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { currentTaskSelector } from '../../redux/Tasks/selector';
import { computeDurationFromNow } from '../../service/computeDurationFromNow';
import { formatDuration } from '../../service/formatDuration';
import { theme } from '../../theme';
import { Card } from '../Card';
import { StopCurrentTaskButton } from '../StopCurrentTaskButton';
import { Subtitle } from '../Subtitle';

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

export const CurrentTaskCard: FC<{}> = () => {
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const currentTask = useSelector(currentTaskSelector);

  useEffect(() => {
    if (!currentTask) return;
    const { startTime } = currentTask;
    const countdown = computeDurationFromNow(startTime);

    setCountdown(countdown);
    const countdownInterval = setInterval(
      () => setCountdown(computeDurationFromNow(startTime)),
      1000
    );

    return () => {
      clearInterval(countdownInterval);
    };
  }, [currentTask]);

  if (!currentTask) {
    return null;
  }
  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.dataContainer}>
          <Subtitle>{currentTask.title}</Subtitle>
          <Text style={styles.spentTime}>{formatDuration(countdown)}</Text>
        </View>
        <View style={styles.CTAContainer}>
          <StopCurrentTaskButton />
        </View>
      </View>
    </Card>
  );
};
