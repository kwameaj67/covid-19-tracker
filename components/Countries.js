import React from 'react'
import { StyleSheet,Modal,View,FlatList,Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function ListofCountry(props){
    return(
                <FlatList data={props.data}
                    keyExtractor={item => item.id}
                    renderItem={({item})=>(
                        <View>
                            <TouchableOpacity>
                                    <View style={{flexDirection:'row'}}>
                                         <View>
                                            
                                         </View>
                                        <View>
                                            <Text>{props.item.country}</Text>
                                        </View>
                                    </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
    )
}
const styles = StyleSheet.create({

})