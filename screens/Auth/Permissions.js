import React from 'react'
import {StyleSheet,View,Text,SafeAreaView} from 'react-native'
import Button from '../../components/Button'
import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'
import Fonts from '../../constants/Fonts'

function Permission() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text> Permission</Text>
            </View>
        </SafeAreaView>
        );
} 

export default Permission;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})