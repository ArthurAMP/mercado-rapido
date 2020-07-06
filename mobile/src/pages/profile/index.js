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

export default function Profile() {

    const [balance, setBalance] = useState();
    var navigation = useNavigation();
    
    async function loadBalance() {
        const telefone = await AsyncStorage.getItem('telefone');
        const response = await api.post('users/balance', {"telefone": telefone});
        const dinheiro = response.data["saldo"];

        setBalance(`R$ ${dinheiro}`);
    }
    function navigateToMain() {
        navigation.navigate('Main');
    }

    function navigateToScanner() {
        navigation.navigate('Scanner');
    }

    useEffect(() => {
        loadBalance();
    }, []);

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
            <View style={styles.cep}>
                <Icon name="location-on" size={18} color="#000061" style={styles.location} />
                <Text style={styles.ceptext}>Informe o CEP</Text>
            </View>
            


            <View style={styles.user}>
                <Image source={userImg} style={styles.userImg}></Image>
                <View style={styles.balance}>

                    <Text style={styles.balanceText}>
                        SALDO NA CARTEIRA
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Image source={carteiraImg} style={styles.carteira}></Image>
                        <Text style={styles.balanceValue} data={balance}>{balance}</Text>
                    </View>
                    
                </View>

                <View style={styles.giftcards}>
                    <Text style={styles.giftcardsText}>SEUS GIFT CARDS</Text>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity onPress={navigateToScanner}>
                            <Image source={addGift} style={{height: 50, width: 50, marginLeft: 40, marginTop: 35}} />
                            <Text style={{fontSize:10, marginLeft: 20, color: '#000061'}}>Adicionar Gift Card</Text>
                        </TouchableOpacity>
                        <Image source={giftcardImg} style={{height: 80, width: 62, marginRight: 40, marginTop: 15}} ></Image>
                    </View>
                </View>
            </View>


        </View>
    );
}