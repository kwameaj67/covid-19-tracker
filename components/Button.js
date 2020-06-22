import React from 'react'
import { View,StyleSheet,Text,TouchableWithoutFeedback,Animated,Platform,TouchableOpacity } from 'react-native'
import Font from '../constants/Fonts'
import Colors from '../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
export default class  Button extends React.Component{
  constructor(props){
    super(props)
  }
  UNSAFE_componentWillMount(){
        this.animatedValue = new Animated.Value(1);
      }
      handlePressIn = ()=> {
        Animated.spring(this.animatedValue,{
          toValue:0.9
        }).start()
      }
      handlePressOut = ()=> {
        Animated.spring(this.animatedValue,{
          toValue:1,
          friction:20,
          tension:30,
        }).start()
      }
      
    render(){
        const animationStyle={
            transform:[{scale:this.animatedValue}]
          }
       if(this.props.type === "normal"){
        return(
          <View>
            {Platform.OS === 'ios' ?
              <TouchableOpacity activeOpacity={1} onPress={this.props.tap}  onPressIn={()=>{this.handlePressIn()}} onPressOut={()=>{this.handlePressOut()}} >
                  <Animated.View  style={[styles.button,animationStyle]}>
                      <Text style={styles.text}>{this.props.title}</Text>
                  </Animated.View>
              </TouchableOpacity>
          :
            <TouchableWithoutFeedback onPress={this.props.tap}  onPressIn={()=>{this.handlePressIn()}} onPressOut={()=>{this.handlePressOut()}} >
                      <Animated.View  style={[styles.button,animationStyle]}>
                          <Text style={styles.text}>{this.props.title}</Text>
                      </Animated.View>
              </TouchableWithoutFeedback>
          }
          </View>
      )
       }
    }
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:"black",
        elevation:1,
        borderRadius:5,
        padding:20,
        bottom:0
    },
    text:{
        fontFamily:"Medium",
        fontSize:Font.t2,
        color:"white",
        textAlign:'center'
    },
  request:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.green,
        width:62,
        height:62,
        borderRadius: 36,
        borderWidth:3,
        borderColor:"white",
        position:'absolute',
        top:-50,
        left:-30,
        ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: 10 },
              shadowOpacity: 0.3,
              shadowRadius: 5,
            },
            android: {
              elevation: 3,
            },           
}),
  },
 
})