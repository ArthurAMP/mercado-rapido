import React, {useEffect, useState} from 'react';
import { View, Text, Image, AsyncStorage } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import api from '../../services/api';

import userImg from '../../assets/foto-usuario.png'
import carteiraImg from '../../assets/carteira-usuario.png'
import addGift from '../../assets/btn-add-saldo.png'
import giftcardImg from '../../assets/giftcard-saldo.png'
import logo from '../../assets/logo-mercado-rapido-maior.png';
import Icon from 'react-native-vector-icons/MaterialIcons'
import productImg  from '../../assets/product.png';
import btnautomitivos from '../../assets/btn-automitivos.png';
import btncalcados from '../../assets/btn-calcados.png';
import btncomputadores from '../../assets/btn-computadores.png';
import btndesconto from '../../assets/btn-desconto.png';
import btnperfilusuário from '../../assets/btn-perfil-usuário.png';
import btnsmartphones from '../../assets/btn-smartphones.png';

export default function Product() {
    
    const navigation = useNavigation();

    function navigateToMain() {
        navigation.navigate('Main');
    }
    
    function navigateToProfile() {
        navigation.navigate('Profile');
    }

    async function buyProduct() {
        const telefone = AsyncStorage.getItem('telefone');

        await api.put('users/balance', {
            "telefone": "84998229175",
            "value": -1299
        });

        alert("Compra realizada com sucesso!");
    }


    return (
        <View style={styles.container}>
            <View style={styles.navcontainer}>
                    <TouchableOpacity activeOpacity = {.5} onPress={navigateToMain}>
                        <Image source={logo} style={styles.logo}></Image>
                    </TouchableOpacity>
                    <View style={styles.icon}>
                        <Icon name="menu" size={35} color="#000061" style={styles.icon} />
                    </View>
                    <TextInput style={styles.search}>Estou buscando</TextInput>
                    <View style={styles.icon}>
                        <Icon name="local-grocery-store" size={35} color="#000061" style={styles.icon} />
                    </View>
            </View>

            <View style={styles.categories}>
                    <Image source={btndesconto} style={styles.imgicon} />
                    <Image source={btnsmartphones} style={styles.imgicon} />
                    <Image source={btncomputadores} style={styles.imgicon} />
                    <Image source={btnautomitivos} style={styles.imgicon} />
                    <Image source={btncalcados} style={styles.imgicon} />
                    <TouchableOpacity onPress={navigateToProfile}><Image source={btnperfilusuário} style={styles.imgicon} /></TouchableOpacity>
            </View>


            <Image source={productImg} style={styles.product} />

            <TouchableOpacity onPress={buyProduct}>
                <Text style={styles.buybutton}>
                    Finalizar Compra
                </Text>
            </TouchableOpacity>

        </View>
    );

}