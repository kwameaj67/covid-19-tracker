import React from 'react'
import {StyleSheet,View,Text,SafeAreaView,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native'
import ActionSheet from 'react-native-actions-sheet'
import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'
import Fonts from '../../constants/Fonts'
import Header from '../../components/Header'
import { Entypo,Ionicons,FontAwesome }  from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import Card from '../../components/SettingLayout'
function Settings() {
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
          <Header leftAction={LeftView()} rightAction={RightView()} title="Settings" type="App"/>
            <View style={styles.container}>
              <ScrollView>
                <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={()=>{}}>
                    <Card title="Self Assessment" body="Ascertain your covid 19 risk using our screen tool"/>               
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={()=>{}}>
                    <Card title="FAQ's" body="Get answers to Frequently Asked Questions"/>               
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={()=>{}}>
                    <Card title="Testing Center" body="View testing methods"/>               
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={()=>{}}>
                    <Card title="Personal Information" body="View your personal details here"/>               
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={()=>{}}>
                    <Card title="World Wide Statistics" body="View all covid 19 cases around the glove"/>               
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={()=>{}}>
                    <Card title="Share" body="Invite friends and family"/>               
                </TouchableOpacity>
              </ScrollView>
            </View>
        </SafeAreaView>
        );
} 

export default Settings;
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    content:{
     paddingVertical:10,
      borderBottomColor:Colors.grey,
      borderBottomWidth:0.4,
    },
    section:{
      flexDirection:'row',
      justifyContent:'space-between'
    },
    btn:{
      padding:12,
    },
    txtContainer:{
      flexDirection:'column',
    },
    title:{
      fontFamily:"SemiBold",
      fontSize:16,
      letterSpacing:0,
      color:"black"
    },
    summary:{
      fontFamily:"Medium",
      fontSize:14,
      letterSpacing:0,
      color:Colors.black,
      marginTop:5
    }
})