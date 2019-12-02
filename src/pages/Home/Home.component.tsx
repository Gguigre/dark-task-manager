import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-navigation';
import { useSelector } from 'react-redux';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { AddTaskCard } from '../../components/AddTaskCard';
import { CurrentTaskCard } from '../../components/CurrentTaskCard';
import { Section } from '../../components/Section';
import { TaskFormPanel } from '../../components/TaskFormPanel';
import { currentTaskSelector } from '../../redux/Tasks/selector';
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
});

export const Home = () => {
  const currentTask = useSelector(currentTaskSelector);
  const _panel = useRef<SlidingUpPanel>(null);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: theme.spacings.large,
          paddingTop: theme.spacings.huge,
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
        <Section title="Done today"></Section>
      </ScrollView>
      <SlidingUpPanel ref={_panel} containerStyle={styles.slidingPanel} snappingPoints={[0, 1]}>
        <TaskFormPanel />
      </SlidingUpPanel>
    </View>
  );
};
