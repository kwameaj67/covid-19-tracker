import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home/Home';
import Report from '../screens/Report/Report';
import Health from '../screens/Health/Health';
import Faq from '../screens/FAQ/Faq';
import Vitals from '../screens/Vitals/Vitals'
import Settings from '../screens/Settings/Settings'
import Colors from '../constants/Colors';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
    tabBarOptions={{
      activeTintColor:"black",
      inactiveTintColor:Colors.grey,
      showLabel:true,
      tabStyle:{padding:0},
      labelStyle:{fontFamily:"Medium",letterSpacing:0.2,fontSize:12}
    }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused}  icon="home" name="home" />,
        }}
      />
      <BottomTab.Screen
        name="Report"
        component={Report}
        options={{
          title: 'Report',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused}  icon="report" name="send" />,
        }}
      />
      <BottomTab.Screen
        name="Vitals"
        component={Vitals}
        options={{
          title: 'Vitals',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused}  icon="health" name="ios-pulse" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused}  icon="settings" name="settings" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'COVID-19 Worldwide';
    case 'Report':
      return 'Report';
      case 'Vitals':
      return 'Vitals';
      case 'Settings':
      return 'Settings';
  }
}
