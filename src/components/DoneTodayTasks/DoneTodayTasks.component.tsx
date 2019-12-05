import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';
import { Task } from '../../redux/Tasks/reducer';
import { doneTodayTasksSelector } from '../../redux/Tasks/selector';
import { TaskCard } from '../TaskCard';

const renderTaskCard: ListRenderItem<Task> = ({ item }) => {
  return <TaskCard task={item}></TaskCard>;
};
export const DoneTodayTasks = () => {
  const tasks = useSelector(doneTodayTasksSelector);

  return <FlatList data={tasks} renderItem={renderTaskCard} />;
};
