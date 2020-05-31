import React from 'react'
import {StyleSheet,View,Text,SafeAreaView} from 'react-native'

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