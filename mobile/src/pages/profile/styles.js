import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#9a9a9a',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    user: {
        width: 340,
        height: 700,
        marginTop: 100,
        backgroundColor: '#ffffff',
        marginHorizontal: 20,
        alignItems: 'center',

    },
    userImg: {
        marginTop: 120,
        marginBottom: 20,
        height: 150,
        width: 150,
    },
    balance: {
        width: 240,
        height: 100,
        backgroundColor: '#f5ff61',
        borderRadius: 12,

    },
    balanceText: {
        alignSelf: 'flex-start',
        color: '#000061',
        margin: 10,
    },
    carteira: {
        height: 40,
        width: 40,
        marginLeft: 20,
        marginBottom: 20,
    },
    balanceValue: {
        fontSize: 30,
        marginRight: 20,
        color: '#000061',
    },
    giftcards: {
        marginTop: 20,
        width: 240,
        height: 150,
        backgroundColor: '#f5ff61',
        borderRadius: 12,

    },
    giftcardsText: {
        fontSize: 13,
        marginLeft: 15,
        marginTop: 10
    }
})