import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../../theme';
import { Card } from '../Card';
import { StopButton } from '../StopButton';
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

export const CurrentTaskCard: FC<{}> = ({}) => (
  <Card>
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <Subtitle>Code colin's design</Subtitle>
        <Text style={styles.spentTime}>00:34:24</Text>
      </View>
      <View style={styles.CTAContainer}>
        <StopButton />
      </View>
    </View>
  </Card>
);
