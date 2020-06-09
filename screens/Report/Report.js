import React,{createRef} from 'react'
import {StyleSheet,View,Text,SafeAreaView,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native'
import ActionSheet from 'react-native-actions-sheet'
import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'
import Fonts from '../../constants/Fonts'
import Header from '../../components/Header'
import { AntDesign,Ionicons,FontAwesome }  from '@expo/vector-icons'

function Report() {
    const LeftView = ()=> {
        return (
          <View>
            {Platform.OS === 'ios' ?
            <TouchableOpacity activeOpacity={0.8} onPress={()=>{}}>
            <View style={styles.backBtn}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
            </View>
          </TouchableOpacity>
          :
          <TouchableNativeFeedback onPress={() =>{}} background={TouchableNativeFeedback.SelectableBackgroundBorderless()} useForeground={true} >
            <View style={styles.backBtn}>
            <FontAwesome name="user-circle-o" size={24} color="black" />
            </View>
          </TouchableNativeFeedback>
            }
          </View>
        );
  }
  const RightView = ()=> {
    return (
      <View>
        {Platform.OS === 'ios' ?
        <TouchableOpacity activeOpacity={0.8} onPress={()=>{}}>
        <View style={styles.backBtn}>
        <Ionicons name="ios-notifications-outline" size={24} color="black" />
        </View>
      </TouchableOpacity>
      :
      <TouchableNativeFeedback onPress={() =>{}} background={TouchableNativeFeedback.SelectableBackgroundBorderless()} useForeground={true} >
        <View style={styles.backBtn}>
        <Ionicons name="ios-notifications-outline" size={24} color="black" />
        </View>
      </TouchableNativeFeedback>
        }
      </View>
    );
}
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <Header leftAction={LeftView()} rightAction={RightView()} title="Case Report" type="App"/>
            <View style={styles.container}>
                <Text>Report</Text>
            </View>
        </SafeAreaView>
        );
} 

export default Report;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})