import { View, Text } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 

const Main = () => {
  return (
    <View style={{flex:1}}>
      <MapView
       provider={PROVIDER_GOOGLE} 
       
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
    </View>
  )
}

export default Main