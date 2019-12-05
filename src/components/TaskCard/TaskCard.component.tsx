import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Task } from '../../redux/Tasks/reducer';
import { computeDuration } from '../../service/computeDurationFromNow';
import { formatDuration } from '../../service/formatDuration';
import { theme } from '../../theme';
import { Card } from '../Card';
import { Subtitle } from '../Subtitle';

type TaskCardPropsType = {
  task: Task;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  nameContainer: {
    flex: 1,
  },
  duration: {
    color: theme.colors.accent,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export const TaskCard = ({ task }: TaskCardPropsType) => {
  const duration = computeDuration(task.startTime, task.endTime);
  return (
    <Card>
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Subtitle>{task.title}</Subtitle>
        </View>
        <Text style={styles.duration}>{formatDuration(duration)}</Text>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', marginLeft: theme.spacings.small }}
        >
          <View
            style={{
              width: 4,
              height: 4,
              backgroundColor: theme.colors.white,
              borderRadius: 2,
              margin: 2,
            }}
          />
          <View
            style={{
              width: 4,
              height: 4,
              backgroundColor: theme.colors.white,
              borderRadius: 2,
              margin: 2,
            }}
          />
          <View
            style={{
              width: 4,
              height: 4,
              backgroundColor: theme.colors.white,
              borderRadius: 2,
              margin: 2,
            }}
          />
        </TouchableOpacity>
      </View>
    </Card>
  );
};
