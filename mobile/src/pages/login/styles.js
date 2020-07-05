import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5ff61',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginVertical: 40,
        marginRight: 100,
    },
    logo: {
        height: 80,
        width: 70,
    },
    welcome: {
        color: '#0000ba',
        fontSize: 25,
        fontWeight: 'bold',
        width: 200,
        textAlign: 'center',
    },  
    registerForm: {
        alignItems: 'flex-start',
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 100,
        paddingTop: 15,
        paddingBottom: 45,
        borderRadius: 12,
        backgroundColor: '#ffffff',
    },
    label: {
        color: '#0000ba',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 15,
    },
    input: {
        borderColor: '#000061',
        borderRadius: 12,
        height: 50,
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 18,
        width: 300,
        marginHorizontal: 10
    },
    button: {
        textAlign: 'center',
        color: '#f4f4f4',
        backgroundColor: '#1f35ff',
        borderRadius: 12,
        marginHorizontal: 20,
        paddingTop: 15,
        height: 55,
        fontSize: 18,
        fontFamily: 'Roboto',
        marginBottom: 500,
    }
});

