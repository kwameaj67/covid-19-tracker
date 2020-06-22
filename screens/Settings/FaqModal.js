import React from 'react'
import {Modal,View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import Constants from 'expo-constants'
import Collapsible from 'react-native-collapsible';
import { FAQsContent } from '../../constants/body'
import { ScrollView } from 'react-native-gesture-handler';

export default function Modal({close,isVisible}){
    return(
        <Modal
            visible={isVisible}
            presentationStyle={'pageSheet'}
            animationType={'slide'}
        >
            <View style={styles.container}>
                <View style={styles.header}>
                <Text style={styles.headerTitle}>FAQs</Text>
                <TouchableOpacity onPress={() => close(2)}>
                    <Ionicons name="ios-close" size={40} />
                </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <Accordion
                    activeSections={[0]}
                    sections={FAQsContent}
                    touchableComponent={TouchableOpacity}
                    renderSectionTitle={this._renderSectionTitle}
                    renderHeader={}
                    renderContent={}
                    onChange={}
                />
            </ScrollView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
      },
      headerTitle: {
        fontFamily: 'AirbnbCereal-Bold',
        letterSpacing: -0.2,
        fontSize: font_sizes.h1,
      },
})