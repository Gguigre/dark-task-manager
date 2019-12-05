import React, { useRef } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { ScrollView } from 'react-navigation';
import { useSelector } from 'react-redux';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { AddTaskCard } from '../../components/AddTaskCard';
import { CurrentTaskCard } from '../../components/CurrentTaskCard';
import { Section } from '../../components/Section';
import { TaskFormPanel } from '../../components/TaskFormPanel';
import { currentTaskSelector } from '../../redux/Tasks/selector';
import { theme } from '../../theme';
import sideBlob from '../../assets/Blob2.png';
import topBlob from '../../assets/Blob1.png';
import { DoneTodayTasks } from '../../components/DoneTodayTasks';

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
});

export const Home = () => {
  const currentTask = useSelector(currentTaskSelector);
  const _panel = useRef<SlidingUpPanel>(null);

  return (
    <View style={styles.container}>
      <Image source={sideBlob} style={styles.sideBlob} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: theme.spacings.large,
          paddingTop: 2 * theme.spacings.huge,
        }}
      >
        <Section title="CurrentTask">
          {currentTask ? (
            <CurrentTaskCard />
          ) : (
            <AddTaskCard
              onPress={() => {
                _panel && _panel.current && _panel.current.show();
              }}
            />
          )}
        </Section>
        <Section title="My projects"></Section>
        <Section title="Done today">
          <DoneTodayTasks></DoneTodayTasks>
        </Section>
      </ScrollView>
      <Image source={topBlob} style={styles.topBlob} />
      <SlidingUpPanel ref={_panel} containerStyle={styles.slidingPanel} snappingPoints={[0, 1]}>
        <TaskFormPanel />
      </SlidingUpPanel>
    </View>
  );
};
