import React,{createRef} from 'react'
import {StyleSheet,View,Text,SafeAreaView} from 'react-native'
import ActionSheet from 'react-native-actions-sheet'
import Colors from '../../constants/Colors'
import Layout from '../../constants/Layout'
import Fonts from '../../constants/Fonts'

function Report() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text> Text</Text>
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
    }
})