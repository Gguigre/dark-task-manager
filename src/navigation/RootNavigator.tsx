import { createStackNavigator } from 'react-navigation-stack';
import { Home, Login, CheatCodes } from '../pages';

export const RootNavigator = createStackNavigator({
  Home,
  Login,
  CheatCodes,
});
