import React from 'react'
import {StyleSheet,View,Text,SafeAreaView} from 'react-native'
import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'
import ActionSheet from 'react-native-actions-sheet'
import Fonts from '../../constants/Fonts'
function Settings() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text> Settings</Text>
            </View>
        </SafeAreaView>
        );
} 

export default Settings;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})