import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Main from '../screens/Main';
import Login from '../screens/Login';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={Splash}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Main" component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes