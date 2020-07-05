import React, {useEffect} from 'react';
import api from '../../services/api';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import userImg from '../../assets/foto-usuario.png'
import carteiraImg from '../../assets/carteira-usuario.png'
import addGift from '../../assets/btn-add-saldo.png'
import giftcardImg from '../../assets/giftcard-saldo.png'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Profile() {
    return (
        <View style={styles.container}>
            
            <View style={styles.user}>
                <Image source={userImg} style={styles.userImg}></Image>
                <View style={styles.balance}>

                    <Text style={styles.balanceText}>
                        SALDO NA CARTEIRA
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Image source={carteiraImg} style={styles.carteira}></Image>
                        <Text style={styles.balanceValue}> R$ 400,00</Text>
                    </View>
                    
                </View>

                <View style={styles.giftcards}>
                    <Text style={styles.giftcardsText}>SEUS GIFT CARDS</Text>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <TouchableOpacity>
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