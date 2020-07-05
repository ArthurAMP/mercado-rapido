import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import styles from './styles'
import logo from '../../assets/logo-mercado-livre-rapido.png';

export default function Home() {
    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.logo} />

            <TouchableOpacity onPress={navigateToLogin}>
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}