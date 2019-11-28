import React from 'react';
import { Button } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

export const CheatCodesButton = (props: NavigationInjectedProps<{}>) => (
  <Button title="CheatCodes" onPress={() => props.navigation.navigate('CheatCodes')} />
);
