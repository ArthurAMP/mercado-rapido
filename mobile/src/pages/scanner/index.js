import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, AsyncStorage } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {useNavigation} from '@react-navigation/native'
import api from '../../services/api';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);



  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);


    const navigation = useNavigation();
    
    function navigationToProfile() {
        navigation.navigate('Profile');
    }

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);

    const telefone = await AsyncStorage.getItem('telefone');

    await api.put('users/balance', {
        'telefone' : telefone,
        'value': data,
    });

    await alert(`Gift card com valor de R$ ${data} foi creditado!`);

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}
