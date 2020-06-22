import React,{useState} from 'react'
import {StyleSheet,View,Text,SafeAreaView,TouchableOpacity,TouchableNativeFeedback,Platform,Modal,StatusBar,ScrollView} from 'react-native'
import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'
import Fonts from '../../constants/Fonts'
import Header from '../../components/Header'
import { AntDesign,Ionicons,FontAwesome }  from '@expo/vector-icons'
import TextInput from '../../components/TextInput'
import RadioButtonRN from 'radio-buttons-react-native';
import Button from '../../components/Button'

function Report() {
  const [isVisible, setVisible] = useState(false)
  const [location, setLocation] = useState(false)
  const [landmark, setLandmark] = useState(false)
  const [contact, setContact] = useState(false)
  const [description, setDescription] = useState(false)
  const data = [{ label: 'Me'},{ label: 'Other individual'}];

  function close(){
    setVisible(false)
  }
  function openModal(){
    setVisible(true)
  }
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
  const cancelIcon = ()=>{
    return(
      <TouchableOpacity onPress={close} activeOpacity={0.8}>
					<AntDesign name="close" size={25} color="black"/>
			</TouchableOpacity>
    )
  }
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
            <Header leftAction={LeftView()} rightAction={RightView()} title="Case Report" type="App"/>
            <StatusBar barStyle='dark-content' backgroundColor="black" />
            <View style={styles.container}>
            <Modal
              visible={isVisible}
              animationType="slide"
              presentationStyle={'pageSheet'} >
              <Header title="Make Report" type="modal" cancel={cancelIcon()}/>
              <ScrollView>
              <View style={styles.content}>
                <Text style={styles.title}>Who are you reporting</Text>
                <RadioButtonRN
                      data={data}
                      selectedBtn={(e) => console.log(e)}
                      animationTypes={['shake']}
                      circleSize={16}
                      initial={3}
                      box={false}
                      activeColor={Colors.black}
                      inactiveColor={Colors.grey}
                      textStyle={{
                        fontFamily: 'Medium',
                        letterSpacing: -0.2,
                      }}
                      icon={
                        <AntDesign
                          name="checkcircle"
                          size={20}
                        />
                      }
                    />
              </View>
              <View style={styles.content}>
                <Text style={styles.title}>Location</Text>
                <View style={styles.textInput}>
                    <TextInput
                      input="general"
                      placeholder="Home Address"
                      onChange={location => setLocation(location)}
                      style={styles.input}
                    />
                </View>
              </View>
              <View style={styles.content}>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{flex:6}}>
                        <Text style={styles.title}>Landmark</Text>
                        <View style={styles.textInput}>
                          <TextInput
                            input="general"
                            placeholder="Nearest building"
                            onChange={landmark => setLandmark(landmark)}
                            style={styles.input}
                          />
                        </View>
                      </View>
                      <View style={{flex:4}}>
                        <Text style={styles.title}>Contact</Text>
                        <View style={styles.textInput}>
                          <TextInput
                            input="number"
                            placeholder="For emergency"
                            
                            onChange={contact => setContact(contact)}
                            style={styles.input}
                          />
                        </View>
                      </View>
                 </View>
              </View>
              <View style={styles.content}>
                <Text style={styles.title}>Description</Text>
                <View style={styles.textInput}>
                    <TextInput
                      input="general"
                      placeholder="Tell us how you feel"
                      onChange={description => setDescription(description)}
                      style={styles.input}
                    />
                </View>
              </View>
              <View style={{bottom:0,paddingHorizontal:30}}>
                 <Button type="normal" title="Report Case"/>
              </View>
            </ScrollView>
            </Modal>
              <View style={{justifyContent:'center',alignItems:'center'}}>
                      <TouchableOpacity activeOpacity={0.6} onPress={openModal}>
                        <View>
                            <Text style={styles.btnTxt}>Report a case</Text>
                        </View>
                      </TouchableOpacity>
                </View>
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
    },
    btnTxt:{
      letterSpacing: 0,
      fontSize: 18,
      // color: Colors.black,
      fontFamily: "Medium",
      textAlign:'center'
      },
      content:{
        paddingVertical:12,
        paddingHorizontal:20
      },
      title:{
        fontFamily:'SemiBold',
        fontSize: 16,
      },
      textInput:{
        paddingVertical:10
      },
      input:{
        letterSpacing: 0,
        fontSize: 18,
        fontFamily: "Medium",
        borderColor:Colors.border,
        borderWidth:1,
        paddingVertical: 15,
        paddingHorizontal: 20,
      }
     
})