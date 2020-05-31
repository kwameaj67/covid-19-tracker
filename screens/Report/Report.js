import React from 'react'
import {StyleSheet,View,Text,SafeAreaView} from 'react-native'

function Report() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text>Faq</Text>
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