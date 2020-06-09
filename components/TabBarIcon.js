import {MaterialIcons,Ionicons,FontAwesome,Entypo } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  if(props.icon ==='home'){
    return (
      <Entypo
        name={props.name}
        size={24}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }else if(props.icon ==='report'){
    return (
      <FontAwesome
        name={props.name}
        size={24}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }else  if(props.icon ==='health'){
    return (
      <Ionicons
        name={props.name}
        size={24}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }else  if(props.icon ==='settings'){
    return (
      <MaterialIcons
        name={props.name}
        size={24}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
