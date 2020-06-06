import React from 'react'
import {StyleSheet,View,Text,SafeAreaView} from 'react-native'

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