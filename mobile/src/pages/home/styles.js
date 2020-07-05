import { StyleSheet } from 'react-native';
import harabara from './../../assets/fonts/Harabara Mais Demo.otf';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5ff61',
    },
    logo: {
        height: 200,
        width: 178,
    },
    button: {
        color: '#f4f4f4',
        backgroundColor: '#1f35ff',
        paddingVertical: 15,
        paddingHorizontal: 100,
        marginTop: 40,
        borderRadius: 12,
        fontSize: 18,
        fontFamily: 'Roboto',
        width: 'auto',
    }
});

