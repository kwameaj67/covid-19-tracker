import React from 'react'
import {StyleSheet,View,Text} from 'react-native'
import Colors from '../constants/Colors'

const  card = ({title,body})=>{
    return(
        <View style={styles.content}>
        <TouchableOpacity style={styles.btn} activeOpacity={0.9} onPress={()=>{}}>
            <View style={styles.section}>
                  <View style={styles.txtContainer}>
                      <Text style={styles.title}>{title}</Text>
                      <Text style={styles.summary}>{body}</Text>
                    </View>
                    <Entypo name="chevron-right" size={20} color={Colors.black}/>
          </View>
        </TouchableOpacity>
    </View>
    )
}
export default card
const styles = StyleSheet.create({
    content:{
        paddingVertical:10,
         borderBottomColor:Colors.grey,
         borderBottomWidth:0.4,
       },
       section:{
         flexDirection:'row',
         justifyContent:'space-between'
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