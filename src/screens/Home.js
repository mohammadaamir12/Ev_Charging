import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from './Main';
import Login from './Login';
import Favourite from './Favourite';
import Profile from './Profile';
import Colors from '../Utils/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const Home = ({navigation}) => {
  return ( 
      <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name="Main" component={Main}
        options={{
          tabBarLabel:'Home',
          tabBarActiveTintColor:Colors.Primary,
          tabBarLabelStyle: { fontSize: 12,fontWeight:'500' },
          tabBarIcon:({size,color})=>(
            <Entypo name="home" size={size} color={color}/>
          )
        }} />
        <Tab.Screen name="Favourite" component={Favourite}
        options={{
          tabBarLabel:'Favourite',
          tabBarActiveTintColor:Colors.Primary,
          tabBarLabelStyle: { fontSize: 12,fontWeight:'500' },
          tabBarIcon:({size,color})=>(
            <Entypo name="heart" size={size} color={color}/>
          )
        }}  />
        <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel:'Profile',
          tabBarActiveTintColor:Colors.Primary,
          tabBarLabelStyle: { fontSize: 12,fontWeight:'500' },
          tabBarIcon:({size,color})=>(
            <FontAwesome name="user" size={size} color={color}/>
          )
        }} />
      </Tab.Navigator>
  )
}

export default Home