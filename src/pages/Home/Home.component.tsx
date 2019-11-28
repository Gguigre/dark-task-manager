import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationInjectedProps, ScrollView } from 'react-navigation';
import { theme } from '../../theme';
import { Title } from '../../components/Title';
import { Card } from '../../components/Card';
import { Subtitle } from '../../components/Subtitle';
import { Section } from '../../components/Section';
import { CurrentTaskCard } from '../../components/CurrentTaskCard';

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
            padding: theme.spacings.xxlarge,
          }}
        >
          <Section title="CurrentTask">
            <CurrentTaskCard />
          </Section>
          <Title>My projects</Title>
          <Title>Done today</Title>
        </ScrollView>
      </View>
    );
  }
}
