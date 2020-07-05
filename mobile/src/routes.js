import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

const AppStack = createStackNavigator();

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Register" component={Register} />


            </AppStack.Navigator>
        </NavigationContainer>
    );
}