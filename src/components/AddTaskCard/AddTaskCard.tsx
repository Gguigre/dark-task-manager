import React from 'react';
import { StyleSheet, View, TouchableOpacity, Button, Text } from 'react-native';
import { theme } from '../../theme';
import { Card } from '../Card';
import { Subtitle } from '../Subtitle';
import { Title } from '../Title';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: theme.spacings.small,
  },
});

type AddTaskCardPropsType = {
  onPress?: () => void;
};

export const AddTaskCard = ({ onPress }: AddTaskCardPropsType) => {
  return (
    <>
      <Card>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.container}>
            <Title>+</Title>
            <Subtitle>Press here to start a new task</Subtitle>
          </View>
        </TouchableOpacity>
      </Card>
    </>
  );
};
