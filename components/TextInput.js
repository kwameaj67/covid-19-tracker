import React from 'react'
import { View,StyleSheet,TextInput } from 'react-native'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'

export default function Input(props){
   if(props.input === "general"){
    return(
        <View>
            <TextInput
                    placeholder={props.placeholder}
                    keyboardType="default"
                    fontSize={16}
                    onChangeText={props.onChange}
                    style={styles.input}
                />
        </View>
    )
   }else if(props.input === "number"){
      return(
          <View>
              <TextInput
                      placeholder={props.placeholder}
                      keyboardType="number-pad"
                      fontSize={16}
                      onChangeText={props.onChange}
                      style={styles.input}
                  />
          </View>
      )
     }
  

}
const styles = StyleSheet.create({
      textContainer:{
        borderColor:Colors.border,
        borderWidth:1,
        borderRadius:5,
        padding:7,
      },
       input: {
        letterSpacing: 0,
        fontSize: 14,
        color: Colors.grey,
        fontFamily: "Medium",
        marginVertical: 10,
        borderColor: Colors.border,
          },
})