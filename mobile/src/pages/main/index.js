import { View, Image, Text, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import btnautomitivos from '../../assets/btn-automitivos.png';
import btncalcados from '../../assets/btn-calcados.png';
import btncomputadores from '../../assets/btn-computadores.png';
import btndesconto from '../../assets/btn-desconto.png';
import btnperfilusuário from '../../assets/btn-perfil-usuário.png';
import btnsmartphones from '../../assets/btn-smartphones.png';
import cel1 from '../../assets/cell-um.png';
import cel2 from '../../assets/cel-2.png';
import cel3 from '../../assets/cel-3.png';
import logo from '../../assets/logo-mercado-rapido-maior.png';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HeaderBackground } from '@react-navigation/stack';
Icon.loadFont();
    export default function Main(){
        
        return(
            <View style={styles.div}>
                <View style={styles.container}>
                    <Image source={logo} style={styles.logo} />
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
                <View style={styles.background}>
                    <View style={styles.categories}>
                        <Image source={btndesconto} style={styles.imgicon} />
                        <Image source={btnsmartphones} style={styles.imgicon} />
                        <Image source={btncomputadores} style={styles.imgicon} />
                        <Image source={btnautomitivos} style={styles.imgicon} />
                        <Image source={btncalcados} style={styles.imgicon} />
                        <Image source={btnperfilusuário} style={styles.imgicon} />
                    </View>
                    <View style={styles.offers}>
                        <View style={styles.offersheader}><Text style={styles.ofertas}>Ofertas</Text></View>
                        <View style={styles.product}>
                            <Image source={cel1} style={styles.cel} />
                        </View>
                        <View style={styles.product}>
                            <Image source={cel2} style={styles.cel} />
                        </View><View style={styles.product}>
                            <Image source={cel3} style={styles.cel} />
                        </View>
                    </View>
                </View>
                
            </View>
            
        );
}
