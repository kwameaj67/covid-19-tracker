import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import Home from '../screens/Home/Home';
import Report from '../screens/Report/Report';
import Health from '../screens/Health/Health';
import Faq from '../screens/FAQ/Faq';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="home-variant" icon="home"/>,
        }}
      />
      <BottomTab.Screen
        name="Report"
        component={Report}
        options={{
          title: 'Report',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="alarm" icon="report" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={Health}
        options={{
          title: 'Health',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="hearthbeat-alt" icon="health" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={Faq}
        options={{
          title: 'FAQs',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="profile" icon="faq" />,
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
    case 'Links':
      return 'Settings';
  }
}
