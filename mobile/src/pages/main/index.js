import { View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles'
import logo from '../../assets/logo-mercado-rapido-maior.png';
import React, {useState} from 'react';
import { SearchBar } from 'react-native-elements';
    export default function Main(){
        
        return(
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
                <SearchBar
                    round
                    lightTheme
                    width = '100%'
                    placeholder = 'Type Here...'
                />
                <TouchableOpacity>
                    <Text>placeholder</Text>
                </TouchableOpacity>
             </View>
        );
}
