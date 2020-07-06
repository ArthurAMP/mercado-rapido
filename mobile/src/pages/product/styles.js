import {StyleSheet} from 'react-native'


export default StyleSheet.create({
    container: {
        backgroundColor: '#dbdbdb',
        flex: 1,
    },
    navcontainer: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row', 
        backgroundColor: '#f5ff61',
    },
    logo: {
        height: 70,
        width: 60,
        marginTop: '15%',
        resizeMode: 'contain',
    },
    icon: {
        marginTop: '5%',
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
    product: {
        alignSelf: "center",
        marginTop: 30,
        height: 403,
        width: 309,
        borderRadius: 12,
    },
    buybutton: {
        backgroundColor: '#1f35ff',
        textAlign: 'center',
        alignSelf: 'center',
        color: '#ffffff',
        width: 200,
        height: 60,
        marginVertical: 25,
        fontSize: 18,
        paddingTop: 20,
        borderRadius: 14,
    },
    imgicon:{
        height: 70,
        width: 50,
        resizeMode: 'contain',
    },
    categories:{
        marginTop: '5%',
        width: "85%",
        height: "11%",
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    background:{
        flex: 8,
        backgroundColor: '#CCCCCC',
        alignItems: 'center',
    },
});