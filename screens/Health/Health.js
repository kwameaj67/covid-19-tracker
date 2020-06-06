import React,{createRef} from 'react'
import {StyleSheet,View,Text,SafeAreaView} from 'react-native'
import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'
import Fonts from '../../constants/Fonts'
import ActionSheet from 'react-native-actions-sheet'

function Health() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text>Health</Text>
            </View>
        </SafeAreaView>
        );
} 

export default Health;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})