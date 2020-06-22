import React from 'react'
import {StyleSheet,View,Text,SafeAreaView,TouchableOpacity,TouchableNativeFeedback,Platform} from 'react-native'
import ActionSheet from 'react-native-actions-sheet'
import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'
import Fonts from '../../constants/Fonts'
import Header from '../../components/Header'
import { Entypo,Ionicons,FontAwesome }  from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
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
                <View style={styles.content}>
                        <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={()=>{}}>
                         <View style={styles.section}>
                            <View style={styles.txtContainer}>
                                <Text style={styles.title}>Self Assessment</Text>
                                <Text style={styles.summary}>Ascertain your covid 19 risk using our screen tool</Text>
                              </View>
                              <Entypo name="chevron-right" size={20} color={Colors.black}/>
                       </View>
                        </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={()=>{}}>
                       <View  style={styles.section}>
                            <View style={styles.txtContainer}>
                                <Text style={styles.title}>FAQ's</Text>
                                <Text style={styles.summary}>Get answers to Frequently Asked Questions</Text>
                              </View>
                            <Entypo name="chevron-right" size={20} color={Colors.black}/>
                       </View>
                      </TouchableOpacity>
                </View>
                <View style={styles.content}>
                     <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={()=>{}}>
                        <View style={styles.section}>
                            <View style={styles.txtContainer}>
                                <Text style={styles.title}>Testing Center</Text>
                                <Text style={styles.summary}>View testing methods</Text>
                              </View>
                              <Entypo name="chevron-right" size={20} color={Colors.black}/>
                        </View>
                     </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={()=>{}}>
                    <View style={styles.section}>
                        <View style={styles.txtContainer}>
                            <Text style={styles.title}>Personal Information</Text>
                            <Text style={styles.summary}>View your personal details here</Text>
                          </View>
                          <Entypo name="chevron-right" size={20} color={Colors.black}/>
                    </View>
                     </TouchableOpacity>
                </View>
                <View style={styles.content}>
                  <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={()=>{}}>
                    <View style={styles.section}>
                          <View style={styles.txtContainer}>
                              <Text style={styles.title}>World Wide Statistics</Text>
                              <Text style={styles.summary}>View all covid 19 cases around the glove</Text>
                            </View>
                            <Entypo name="chevron-right" size={20} color={Colors.black}/>
                      </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={()=>{}}>
                        <View style={styles.section}>
                              <View style={styles.txtContainer}>
                                  <Text style={styles.title}>Share</Text>
                                  <Text style={styles.summary}>Invite friends and family</Text>
                                </View>
                                <Entypo name="chevron-right" size={20} color={Colors.black}/>
                      </View>
                    </TouchableOpacity>
                </View>
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