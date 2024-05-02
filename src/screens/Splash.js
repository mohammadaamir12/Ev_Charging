import { View, Text,Image } from 'react-native'
import React,{useEffect} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../Utils/Colors';
import LottieView from 'lottie-react-native';


const Splash = ({navigation}) => {
    useEffect(()=>{
        
        setTimeout(() => {
            navigation.navigate('Login')
          }, 6000);
        },[])
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:Colors.White}}>
      <LottieView source={require('../assets/images/Splash.json')} autoPlay loop style={{height:hp('40%'),width:wp('70%')}} />
    </View>
  )
}

export default Splash