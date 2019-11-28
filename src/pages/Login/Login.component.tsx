import React, { FunctionComponent } from 'react';
import { Button, View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import I18nJS from 'i18n-js';
import { CheatCodesButton } from '../../components/CheatCodesButton';
import { useDispatch, useSelector } from 'react-redux';
import { isLoadingSelector } from '../../redux/LoadingStatus/selectors';
import { startLoading, finishLoading } from '../../redux/LoadingStatus';

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
const LOADER_NAME = 'demoLoader';

export const Login: FunctionComponent<NavigationInjectedProps<{}>> = ({ navigation }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector(LOADER_NAME));

  const goToHomePage = (): void => {
    navigation.navigate('Home');
  };

  const toggleLoader = () => {
    if (!isLoading) {
      dispatch(startLoading(LOADER_NAME));
    } else {
      dispatch(finishLoading(LOADER_NAME));
    }
  };

  return (
    <View style={styles.container}>
      <Text>{I18nJS.t('login.title')}</Text>
      <Button title={I18nJS.t('login.homeButton')} onPress={goToHomePage} />
      <CheatCodesButton navigation={navigation} />
      <Text>{I18nJS.t('login.redux')}</Text>
      <Button title={I18nJS.t('login.loader')} onPress={toggleLoader} />
      {isLoading && <ActivityIndicator testID="demoLoader" />}
    </View>
  );
};
