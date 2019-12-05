import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Task } from '../../redux/Tasks/reducer';
import { doneTodayTasksSelector } from '../../redux/Tasks/selector';
import { TaskCard } from '../TaskCard';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  taskCardContainer: {
    marginBottom: theme.spacings.small,
  },
});

const renderTaskCard: ListRenderItem<Task> = ({ item }) => {
  return (
    <View style={styles.taskCardContainer}>
      <TaskCard task={item}></TaskCard>
    </View>
  );
};
export const DoneTodayTasks = () => {
  const tasks = useSelector(doneTodayTasksSelector);

  return <FlatList data={tasks} renderItem={renderTaskCard} />;
};
