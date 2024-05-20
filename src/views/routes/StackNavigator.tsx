import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TabBottom from './TabBottom';
import {DetailsTheDay} from '../screens';
import {RoutesNavigationStack} from '../../@types';

const Stack = createStackNavigator<RoutesNavigationStack>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TabCustom">
      <Stack.Screen
        name="TabCustom"
        component={TabBottom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailsTheDay"
        component={DetailsTheDay}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
