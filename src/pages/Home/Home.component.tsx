import React, { PureComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationInjectedProps, ScrollView } from 'react-navigation';
import { CurrentTaskCard } from '../../components/CurrentTaskCard';
import { Section } from '../../components/Section';
import { theme } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
});

export class Home extends PureComponent<NavigationInjectedProps<{}>> {
  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: theme.spacings.large,
            paddingTop: theme.spacings.huge,
          }}
        >
          <Section title="CurrentTask">
            <CurrentTaskCard />
          </Section>
          <Section title="My projects"></Section>
          <Section title="Done today"></Section>
        </ScrollView>
      </View>
    );
  }
}
