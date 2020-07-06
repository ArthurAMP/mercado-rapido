import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    div: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row', 
        backgroundColor: '#f5ff61',
    },
    cep:{
        flexDirection: 'row',
        flex: 0.4,
        backgroundColor: '#f5ff61',
    },
    ceptext:{
        marginTop: '2%',
        color: '#000061',
    },
    logo: {
        height: 70,
        width: 60,
        marginTop: '5%',
        resizeMode: 'contain',
    },
    icon: {
        marginTop: '5%',
    },
    location:{
        marginLeft: '5%',
        marginTop: '2%',
        marginRight: '1%',
    },
    search: {
        backgroundColor: '#ffffff',
        borderRadius: 25,
        marginTop: '6%',
        paddingHorizontal: 10,
        color: '#747474',
        height: 45,
        width: 220,
        textAlign: 'center'
    },
    brand: {
        fontSize: 30,
        color: '#0000ba',
        fontWeight: 'bold',
    },
    background:{
        flex: 8,
        backgroundColor: '#CCCCCC',
        alignItems: 'center',
    },
    categories:{
        marginTop: '5%',
        width: "85%",
        height: "11%",
        alignItems: 'center',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    offers:{
        marginTop: '5%',
        width: "85%",
        height: "70%",
        backgroundColor: '#FFF',
        borderRadius: 10
    },
    offersheader:{
        justifyContent: 'space-around',
        flex: 2
    },
    product:{
        flex: 4,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopColor: '#777', 
        borderTopWidth: 1,
    },
    ofertas:{
        fontSize: 20,
        marginLeft: '5%',
        fontWeight: 'bold'
    },
    imgicon:{
        height: 70,
        width: 50,
        resizeMode: 'contain',
    },
    cel:{
        width: '100%',
        resizeMode: 'contain',
    }
});


