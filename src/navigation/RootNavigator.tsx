import { createStackNavigator } from 'react-navigation-stack';
import { Home } from '../pages';

export const RootNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
});
