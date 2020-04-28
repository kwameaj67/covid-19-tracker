import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View ,Modal,FlatList,ActivityIndicator} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useQuery } from '@apollo/react-hooks'
import { CovidQuery,GlobalTotal } from '../Graphql/Queries'
import { client } from '../Graphql/Client'
import moment from 'moment'
import { AntDesign } from '@expo/vector-icons'

 class HomeScreen extends React.Component {
   state = { 
      lastupdated:"--",
      worldConfirmed:"--",
      worldRecovered:"--",
      worldDeaths:"--",
      covidData:[],
      selectCountry:"Tap here",
      visible:false,
      confirmed:0,
      recovered:0,
      deaths:0,
      active:0,
      critical:0,
      tests:0,
      image:"",
      loading:true,

   }
    componentDidMount(){
        this.getQuery()
        this.globalStats()
    }
    getQuery = ()=> {
      this.setState({loading:true})
        client.query(({
          query:CovidQuery
        })).then(response => {
          let data = response.data
          // console.log(data.countries)
          this.setState({covidData:data.countries})
          if(data.countries.country === "Ghana"){
            this.setState({selectCountry})
          }
          console.log(this.state.covidData)
          this.setState({loading:false})
        }).catch((error)=>{
          console.log(error)
          this.setState({loading:false})
        })
    }
    globalStats = ()=> {
      client.query({
        query:GlobalTotal
      }).then(response => {
        let data =  response.data.globalTotal;
        // console.log(data)
        this.setState({
          worldDeaths:data.deaths,
          worldRecovered:data.recovered,
          worldConfirmed:data.cases,
          lastupdated:data.date,
          confirmed:data.cases,
          recovered:data.recovered,
          active:data.active,
          critical:data.critical,
          tests:data.tests,
          deaths:data.deaths
        })
      }).catch((error)=>{
        console.log(error)
      })
    }
    worldwideStats = ()=> {
      const { worldDeaths,worldRecovered,worldConfirmed,lastupdated } = this.state
      return(
        <View style={{paddingHorizontal:5,paddingVertical:10,}}>
          <View style={{backgroundColor:'white',borderRadius:5}}>
              <View style={{paddingHorizontal:10,paddingVertical:5}}>
                  <Text style={styles.header}>Worldwide Statistics</Text>
              </View>
              <View style={{flexDirection:'row',alignItems:'center',paddingVertical:20,paddingHorizontal:10}}>
                  <View>
                      <Text style={[styles.text,{color:"#613EEA"}]}>Confirmed</Text>
                      <Text style={styles.number}>{worldConfirmed}</Text>
                  </View>
                  <View style={{borderWidth:0.5,borderColor:'black',height:40,marginHorizontal:10}}></View>
                  <View>
                      <Text style={[styles.text,{color:"#F2C94C"}]}>Recovered</Text>
                      <Text style={styles.number}>{worldRecovered}</Text>
                  </View>
                  <View style={{borderWidth:0.5,borderColor:'black',height:40,marginHorizontal:10}}></View>
                  <View>
                      <Text style={[styles.text,{color:"#EB5757"}]}>Deaths</Text>
                      <Text style={styles.number}>{worldDeaths}</Text>
                  </View>
                  <View style={{borderWidth:0.5,borderColor:'black',height:40,marginHorizontal:10}}></View>
              </View>
            </View>
        </View>
      )
    }
    countryList = ()=> {
        return(
          <FlatList 
             extraData={this.state}
             data={this.state.covidData}
                    keyExtractor={item => item.key}
                    renderItem={({item})=>(
                        <View key={item.key} style={{paddingHorizontal:10}}>
                            <TouchableOpacity 
                               onPress={()=>{
                                this.setState({
                                  visible:false,
                                  confirmed:item.result.cases,
                                  recovered:item.result.recovered,
                                  active:item.result.active,
                                  critical:item.result.critical,
                                  tests:item.result.tests,
                                  deaths:item.result.deaths,
                                  selectCountry:item.country,
                                  image:item.countryInfo.flag
                                  },()=>{
                                     this.specificStats(item)
                                  })
                                  console.log(item)
                            }}
                            >
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                         <View style={{paddingVertical:10}}>
                                            <Image source={{uri:item.countryInfo.flag}} style={{width:40,height:30,marginHorizontal:20,}}/>
                                         </View>
                                        <View>
                                            <Text>{item.country}</Text>
                                        </View>
                                    </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
        )
    }
    specificStats = (item) => {
      const { confirmed,tests,active,critical,deaths,recovered  } = this.state
      return(
        <View style={{flexDirection:'column',}}>
                        <View style={{flexDirection:'row',alignItems:'center',paddingVertical:10,paddingHorizontal:10}}>
                            <View style={{flexDirection:'column'}}>
                               <View style={{paddingVertical:10}}>
                                  <Text style={[styles.text,{color:"#613EEA"}]}>Confirmed</Text>
                                  <Text style={styles.number}>{confirmed}</Text>
                               </View>
                               <View style={{paddingVertical:10}}>
                                  <Text style={[styles.text,{color:"#F2994A"}]}>Active</Text>
                                  <Text style={styles.number}>{active}</Text>
                               </View>
                            </View>
                            <View style={{borderWidth:0.5,borderColor:'black',height:100,marginHorizontal:10}}></View>
                              <View style={{flexDirection:'column'}}>
                                <View style={{paddingVertical:10}}>
                                    <Text style={[styles.text,{color:"#F2C94C"}]}>Recovered</Text>
                                    <Text style={styles.number}>{recovered}</Text>
                                </View>
                                <View style={{paddingVertical:10}}>
                                    <Text style={[styles.text,{color:"#2D9CDB"}]}>Critical</Text>
                                    <Text style={styles.number}>{critical}</Text>
                                </View>
                              </View>
                            <View style={{borderWidth:0.5,borderColor:'black',height:100,marginHorizontal:10}}></View>
                            <View style={{flexDirection:'column'}}>
                               <View style={{paddingVertical:10}}>
                                  <Text style={[styles.text,{color:"#EB5757"}]}>Deaths</Text>
                                  <Text style={styles.number}>{deaths}</Text>
                               </View>
                               <View style={{paddingVertical:10}}>
                                  <Text style={[styles.text,{color:"#4BD9D0"}]}>Tests</Text>
                                  <Text style={styles.number}>{tests}</Text>
                               </View>
                            </View>
                        </View>
                    </View>
      )
    }
    closeButton = ()=> {
      return(
        <TouchableOpacity onPress={()=>{this.setState({visible:false})}}>
           <View style={{borderRadius:40,padding:25,}}>
              <AntDesign name="close" size={20} color="black"/>
            </View>
        </TouchableOpacity>
      )
    }
    showModal  = ()=> {
      return(
        <Modal visible={this.state.visible} style={{flex:1}}>
            <View>
              {this.closeButton()}
                <ScrollView scrollEventThrottle={16}>
                    {this.countryList()}
                </ScrollView>
            </View>
        </Modal>
      )
    }
   render(){
    const {lastupdated,selectCountry,image,loading} = this.state
     return (
       <ScrollView>
         {loading ? 
         <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <ActivityIndicator color="grey" size={20} animating/>
         </View>
         :
         <View style={styles.container}>
           {this.worldwideStats()}
            <View style={{paddingVertical:10,paddingHorizontal:5}}>
              <Text styles={[styles.header,{fontWeight:"600",}]}>Select Country:</Text>
              <View style={{paddingVertical:10}}>    
                  <View style={{backgroundColor:'white',paddingVertical:20,}}>
                     <TouchableOpacity onPress={()=>{this.setState({visible:true})}} activeOpacity={0.7}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:10}}>
                              <View style={{flexDirection:'row',alignItems:'center'}}>
                              {image === "" ? null:
                                <Image source={{uri:image}} style={{width:30,height:20,marginRight:10,}}/>
                              }
                                  <Text style={{fontWeight:"400",}}>{selectCountry}</Text>
                              </View>
                              <View style={{paddingRight:20}}>
                                <AntDesign name="down" size={18} color="black"/>
                              </View>
                          </View>
                     </TouchableOpacity>
                  </View>
              </View>
            </View>
            <View style={{paddingHorizontal:5,paddingVertical:10,}}>
                <View style={{backgroundColor:'white',borderRadius:5}}>
                    <View style={{paddingHorizontal:10,paddingVertical:5}}>
                        <Text style={styles.header}>Statistics</Text>
                    </View>
                    {this.specificStats()}
                </View>
            </View>
            <View style={{paddingHorizontal:10,paddingVertical:10}}>
                <Text style={{textAlign:'right'}}>{moment(lastupdated).format("ddd, MMMM DD YYYY")}</Text>
            </View>
         {this.showModal()}
         </View>
         }
       </ScrollView>
     );
   }
}
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:10
  },
  number:{
    fontSize:14,
    fontWeight:"600",
  },
  header:{
    fontWeight:"200",
    fontSize:16
  },
  text:{
    fontSize:14
  }
});
