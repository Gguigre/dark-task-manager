import React, { useRef } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import SlidingUpPanel from 'rn-sliding-up-panel';
import topBlob from '../../assets/Blob1.png';
import sideBlob from '../../assets/Blob2.png';
import { AddTaskCard } from '../../components/AddTaskCard';
import { CurrentTaskCard } from '../../components/CurrentTaskCard';
import { DoneTodayTasks } from '../../components/DoneTodayTasks';
import { Section } from '../../components/Section';
import { TaskFormPanel } from '../../components/TaskFormPanel';
import { addTask, setCurrentTask } from '../../redux/Tasks';
import { currentTaskSelector } from '../../redux/Tasks/selector';
import { uid } from '../../service/uid';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  slidingPanel: {
    justifyContent: 'flex-end',
  },
  sideBlob: {
    position: 'absolute',
    right: 0,
    top: '30%',
  },
  topBlob: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  contentContainer: {
    paddingHorizontal: theme.spacings.large,
    paddingTop: 2 * theme.spacings.huge,
  },
});

export const Home = () => {
  const currentTask = useSelector(currentTaskSelector);
  const _panel = useRef<SlidingUpPanel>(null);
  const taskForm = useRef<TaskFormPanel>(null);
  const dispatch = useDispatch();

  const showTaskForm = () => {
    _panel && _panel.current && _panel.current.show();
  };

  const saveTask = () => {
    const task = taskForm && taskForm.current && taskForm.current.getContent();
    if (!task) {
      return;
    }
    if (!task.id) {
      const id = uid();
      dispatch(addTask({ title: task.title || '', id, startTime: new Date(), endTime: null }));
      dispatch(setCurrentTask(id));
    }
  };

  return (
    <View style={styles.container}>
      <Image source={sideBlob} style={styles.sideBlob} />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Section title="CurrentTask">
          {currentTask ? <CurrentTaskCard /> : <AddTaskCard onPress={showTaskForm} />}
        </Section>
        <Section title="My projects"></Section>
        <Section title="Done today">
          <DoneTodayTasks />
        </Section>
      </ScrollView>
      <Image source={topBlob} style={styles.topBlob} />
      <SlidingUpPanel
        ref={_panel}
        containerStyle={styles.slidingPanel}
        snappingPoints={[0, 1]}
        onBottomReached={saveTask}
      >
        <TaskFormPanel task={currentTask} ref={taskForm} />
      </SlidingUpPanel>
    </View>
  );
};
