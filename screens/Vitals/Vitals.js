import React from 'react'
import {StyleSheet,View,Text,SafeAreaView} from 'react-native'

function Vitals() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text>Vitals</Text>
            </View>
        </SafeAreaView>
        );
} 

export default Vitals;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})