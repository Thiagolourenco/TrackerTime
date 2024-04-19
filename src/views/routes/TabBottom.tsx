import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, PomodoroScreen } from '../screens'
import { View } from 'react-native'
import AnalyticsScreen from '../screens/Analytics/AnalyticsScreen'

import PaywallScreen from '../screens/Paywall'
import ProfileScreen from '../screens/Profile'
import ScheduleScreen from '../screens/Schedule'
import { TabCustom } from '../components' 

const TabNavigator = createBottomTabNavigator()

const TabBottomRoutes = () => {
  return (
    <TabNavigator.Navigator 
      tabBar={props => <TabCustom props={props} />}
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false
      }}
    >
      <TabNavigator.Screen 
        name="PomodoroScreen" 
        component={PomodoroScreen}
      />
       <TabNavigator.Screen 
        name="ScheduleScreen"
        component={ScheduleScreen}
      />

      <TabNavigator.Screen 
        name="HomeScreen" 
        component={HomeScreen}
      />
 
      <TabNavigator.Screen name="Analytics" component={AnalyticsScreen} />
      <TabNavigator.Screen name="Profile" component={ProfileScreen} />
    </TabNavigator.Navigator>
  )
}

export default TabBottomRoutes
