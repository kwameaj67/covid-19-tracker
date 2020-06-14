import React, { Component } from 'react'
import {TouchableOpacity,TouchableNativeFeedback,Platform,StyleSheet } from 'react-native'

const left = ()=>{
    return(
        <View>
                {Platform.OS === 'ios' ?
                <TouchableOpacity activeOpacity={0.8} onPress={()=>{}}>
                    <View style={styles.backBtn}>
                       <FontAwesome name="user-circle-o" size={20} color="black" />
                    </View>
                </TouchableOpacity>
                 :
                <TouchableNativeFeedback onPress={() =>{}} background={TouchableNativeFeedback.SelectableBackgroundBorderless()} useForeground={true} >
                    <View style={styles.backBtn}>
                         <FontAwesome name="user-circle-o" size={20} color="black" />
                    </View>
                </TouchableNativeFeedback>
                }
          </View>  
           )
    }
    const right = ()=>{
        return(
            <View>
                    {Platform.OS === 'ios' ?
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>{}}>
                        <View style={styles.backBtn}>
                             <Ionicons name="ios-notifications-outline" size={18} color="black" />
                        </View>
                    </TouchableOpacity>
                     :
                    <TouchableNativeFeedback onPress={() =>{}} background={TouchableNativeFeedback.SelectableBackgroundBorderless()} useForeground={true} >
                        <View style={styles.backBtn}>
                            <Ionicons name="ios-notifications-outline" size={18} color="black" />
                        </View>
                    </TouchableNativeFeedback>
                    }
              </View>  
               )
        }
    

export default { left,right};
const styles = StyleSheet.create({

})