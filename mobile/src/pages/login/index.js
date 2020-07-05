import TouchID from 'react-native-touch-id';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import { View, Image, Text, TouchableOpacity, TextInput, AlertIOS } from 'react-native';
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

import logo from '../../assets/logo-mercado-livre-rapido.png';

export default function Login() {

    const [cpf, setCpf] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    const optionalConfigObject = {
        title: "Authentication Required", // Android
        color: "#e00606", // Android,
        fallbackLabel: "Show Passcode" // iOS (if empty, then label is hidden)
      }

    function authenticate() {
        TouchID.authenticate('to demo this react-native component', optionalConfigObject)
      .then(success => {
        AlertIOS.alert('Authenticated Successfully');
      })
      .catch(error => {
        AlertIOS.alert('Authentication Failed');
      });
    }
    const navigation = useNavigation();
    function navigateToMain() {
        navigation.navigate('Main');
    }


    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <View style={{marginTop: 10}}>
                    <Text style={styles.welcome}>Seja</Text>
                    <Text style={styles.welcome}>Bem Vindo!</Text>
                </View>
                <Image source={logo} style={styles.logo}></Image>
            </View>

            <View style={styles.registerForm}>

                <Text style={styles.label}>CPF</Text>
                <TextInput 
                    style={styles.input} 
                    keyboardType={'numeric'} 
                    maxLength={11}
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                />


                <Text style={styles.label}>Telefone</Text>
                <TextInput 
                    style={styles.input} 
                    keyboardType={'numeric'}
                    value={password}
                    onChange={e => setPassword(e.target.value)} 
                />
            </View>

            <TouchableOpacity onPress={authenticate, navigateToMain}>
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>

        </View>
    );
}
