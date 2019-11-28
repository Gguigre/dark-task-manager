import React, { PureComponent } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import I18nJS from 'i18n-js';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export class Home extends PureComponent<NavigationInjectedProps<{}>> {
  private goToLoginPage = (): void => {
    this.props.navigation.navigate('Login');
  };

  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text>{I18nJS.t('home.title')}</Text>
        <Button title={I18nJS.t('home.loginButton')} onPress={this.goToLoginPage} />
      </View>
    );
  }
}
