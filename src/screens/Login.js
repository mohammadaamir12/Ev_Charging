import { View, Text,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Login = () => {
  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
    <View style={{alignItems:'center',marginTop:70,backgroundColor:'#fff'}}>
      <Image style={{width:wp('40%'),objectFit:'contain'}} source={require('../assets/images/logo.png')} />
      <Image style={{width:wp('90%'),height:hp('20%'),objectFit:'cover'}} source={require('../assets/images/images3.jpg')} />
      <Text style={{
        fontSize:28,
        textAlign:'center',
        marginTop:40,
       fontFamily:'SchibstedGrotesk-VariableFont_wght',
       color:'#000'

      }}>Your Ultimate Ev Charging Station Finder App </Text>
      <Text
      style={{
        fontSize:17,
        textAlign:'center',
        marginTop:8,
       color:'grey'
      }}
      >Find EV Charging Station near you, Plan trip and so much more.</Text>
     
    </View>
    <TouchableOpacity style={{backgroundColor:'#0BC224',alignItems:'center',justifyContent:'center',padding:20,marginTop:40,marginHorizontal:20,borderRadius:30}}>
        <Text style={{
            fontSize:18,
            fontWeight:'500',
            color:'#fff'
        }}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login