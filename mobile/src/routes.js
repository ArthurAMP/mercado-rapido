import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

const AppStack = createStackNavigator();

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Profile from './pages/profile'
import Main from './pages/main';
import Scanner from './pages/scanner';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Register" component={Register} />
                <AppStack.Screen name="Profile" component={Profile} />
                <AppStack.Screen name="Main" component={Main} />
                <AppStack.Screen name="Scanner" component={Scanner} />


            </AppStack.Navigator>
        </NavigationContainer>
    );
}