import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 0.11,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row', 
        backgroundColor: '#f5ff61',
    },
    logo: {
        height: 70,
        width: 80,
        marginTop: '6%',
        resizeMode: 'contain',
    },
    brand: {
        fontSize: 30,
        color: '#0000ba',
        fontWeight: 'bold',
    }
});


