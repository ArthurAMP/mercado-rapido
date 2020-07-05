import React from 'react';
import { View, Image, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import logo from '../../assets/logo.jpg';

export default function Home() {
    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login');
    }

    function navigateToProfile() {
        navigation.navigate('Profile');
    }

    async function checkAuth() {
        const num = await AsyncStorage.getItem('telefone');
        console.log(num);


        navigateToLogin();
        
    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.brand}>
                Mercado Rápido
            </Text>

            <TouchableOpacity onPress={checkAuth}>
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}