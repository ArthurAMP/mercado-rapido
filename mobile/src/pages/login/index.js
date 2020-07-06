import React, {useState} from 'react';
import { View, Image, Text, TouchableOpacity, TextInput, AsyncStorage} from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import logo from '../../assets/logo-mercado-livre-rapido.png';


export default function Login() {

    const [numero, setNumero] = useState('');

    const navigation = useNavigation();

    function navigateToMain() {
        navigation.navigate('Main');
    }

    async function authenticate() {

        if(numero.length == 0) {
            return alert("Numero invalido");
        }

        try {
            const res = await LocalAuthentication.authenticateAsync({promptMessage: "Insira a digital"});

            console.log(res["success"]);

            if(res["success"] == true) {
                await AsyncStorage.setItem(
                    'telefone', `${numero}`,
                )

                const num = await AsyncStorage.getItem('telefone');
                console.log(`valor guardado: ${num}`);
                navigateToMain();
            }
            else {
                console.log("Erro na autenticaca11o");
            }

        } catch (err) {
            console.log(err);
        }
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

                <Text style={styles.label}>Telefone</Text>
                <TextInput 
                    style={styles.input} 
                    value={numero}
                    onChangeText={numero => setNumero(numero)}
                    keyboardType={'numeric'}
                />
            </View>

            <TouchableOpacity onPress={authenticate}>
                <Text style={styles.button}>Login</Text>
            </TouchableOpacity>

        </View>
    );
}
