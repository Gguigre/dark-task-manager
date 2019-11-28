import React from 'react';
import { View } from 'react-native';
import { NavigationActions, NavigationInjectedProps } from 'react-navigation';
import { CodePushButton } from './components/CodePushButton';
import { CrashTestButton } from './components/CrashTestButton';
import { ChangeLanguage } from './components/ChangeLanguage';
import { env } from '../../environment';

export const CheatCodes = (props: NavigationInjectedProps<{}>) => (
  <View>
    <CrashTestButton />
    <ChangeLanguage
      onLanguageChange={() =>
        // @ts-ignore
        props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
      }
    />
    {env.featureFlags.isCodePushEnabled && <CodePushButton />}
  </View>
);
