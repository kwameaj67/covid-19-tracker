import React from 'react'
import {StyleSheet,View,Text,SafeAreaView,ImageBackground} from 'react-native'
import Button from '../../components/Button'
import Input from '../../components/TextInput'
import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'
import Fonts from '../../constants/Fonts'
function Splash() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text> Splash</Text>
            </View>
        </SafeAreaView>
        );
} 

export default Splash;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})