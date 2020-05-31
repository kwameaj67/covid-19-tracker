import React from 'react'
import {StyleSheet,View,Text,SafeAreaView} from 'react-native'

function Verification() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text> Faq</Text>
            </View>
        </SafeAreaView>
        );
} 

export default Verification;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})