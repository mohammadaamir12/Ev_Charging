import { View, Text } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text style={{
        fontSize:30,
        color:'#000',
        fontFamily:'Sedgwick Ave Display'
      }} onPress={()=>navigation.navigate('Main')}>Home</Text>
      <Text style={{
       fontSize:72,
       color:'#000',
       fontFamily:'Sedgwick Ave Display'
      }}>Hello</Text>
    </View>
  )
}

export default Home