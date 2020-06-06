import React from 'react'
import {StyleSheet,View,Text,SafeAreaView} from 'react-native'
import Colors from '../../constants/Colors'
import Fonts from '../../constants/Fonts'
import Layout from '../../constants/Layout'
import ActionSheet from 'react-native-actions-sheet'

function Faq() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text> Faq</Text>
            </View>
        </SafeAreaView>
        );
} 

export default Faq;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})