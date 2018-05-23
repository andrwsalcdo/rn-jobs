import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import AuthScreen from '../screens/AuthScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MapScreen from '../screens/MapScreen';
import DeckScreen from '../screens/DeckScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ReviewScreen from '../screens/ReviewScreen';

export const MainNavigator = createBottomTabNavigator(
  {
    welcome: WelcomeScreen,
    auth: AuthScreen,
    main: {
      screen: createBottomTabNavigator({
        map: MapScreen,
        deck: DeckScreen,
        review: {
          screen: createStackNavigator({
            review: ReviewScreen,
            settings: SettingsScreen
          })
        }
      })
    }
  },
  {
    navigationOptions: {
      tabBarVisible: false
    }
  }
);
