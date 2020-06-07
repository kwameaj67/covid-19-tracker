import {MaterialIcons,AntDesign,FontAwesome,Entypo } from '@expo/vector-icons';
import * as React from 'react';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  if(this.props.icon ==="home"){
    return (
      <Entypo
        name={props.name}
        size={24}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }else  if(this.props.icon ==="report"){
    return (
      <FontAwesome
        name={props.name}
        size={24}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }else  if(this.props.icon ==="health"){
    return (
      <MaterialIcons
        name={props.name}
        size={24}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }else  if(this.props.icon ==="settings"){
    return (
      <Ionicons
        name={props.name}
        size={24}
        style={{ marginBottom: -3 }}
        color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
