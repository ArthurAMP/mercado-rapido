import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';

const AppStack = createStackNavigator();

import Login from './pages/login';
import Home from './pages/home';
import Profile from './pages/profile'
import Main from './pages/main';
import Scanner from './pages/scanner';
import Product from './pages/product';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Login" component={Login} />
                <AppStack.Screen name="Profile" component={Profile} />
                <AppStack.Screen name="Main" component={Main} />
                <AppStack.Screen name="Scanner" component={Scanner} />
                <AppStack.Screen name="Product" component={Product} />

            </AppStack.Navigator>
        </NavigationContainer>
    );
}