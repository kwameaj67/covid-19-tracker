import {SimpleLineIcons,MaterialCommunityIcons,MaterialIcons,AntDesign,Fontisto } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  if(this.props.icon ==="home"){
    return (
      <MaterialCommunityIcons
        name={props.name}
        size={24}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }else  if(this.props.icon ==="report"){
    return (
      <MaterialIcons
        name={props.name}
        size={24}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }else  if(this.props.icon ==="health"){
    return (
      <Fontisto
        name={props.name}
        size={24}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }else  if(this.props.icon ==="faq"){
    return (
      <AntDesign
        name={props.name}
        size={24}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
