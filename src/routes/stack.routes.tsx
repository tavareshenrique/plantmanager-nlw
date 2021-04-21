import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../pages/Welcome';
import { UserIndentification } from '../pages/UserIndentification';
import { Confirmation } from '../pages/Confirmation';

import colors from '../styles/colors';

const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    initialRouteName="Welcome"
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <StackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />
    <StackRoutes.Screen
      name="UserIndentification"
      component={UserIndentification}
    />
    <StackRoutes.Screen
      name="Confirmation"
      component={Confirmation}
    />
  </StackRoutes.Navigator>
);

export default AppRoutes;