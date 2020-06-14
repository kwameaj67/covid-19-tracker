import React from 'react'
import {StyleSheet,View,Text,SafeAreaView} from 'react-native'
import Button from '../../components/Button'
import Input from '../../components/TextInput'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Layout from '../../constants/Layout'
function Signup() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text> Signup</Text>
            </View>
        </SafeAreaView>
        );
} 

export default Signup;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})