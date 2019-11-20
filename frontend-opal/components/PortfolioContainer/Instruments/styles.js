import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    instrumentsArea: {
        width: '92%',
        height: 280,
        margin: 15
    },
    title: {
      fontSize: 16
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
        profileImgContainer: {
            width: 40,
            height: 40,
            borderRadius: 40/2
        },
            profileImg: {
                width: '100%',
                height: '100%'
            },
        profileText: {
            marginLeft: 10
        },
            stockExchange: {
                color: '#B2B2B2'
            },
    instruments: {
        backgroundColor: '#DFF1FD',
        paddingLeft: 10,
        paddingRight: 10
    },
        instrumentDetail: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
            instrumentDetailText: {
                fontSize: 16
            },
            instrumentDetailTextGreen: {
                color: '#5FC748'
            },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10
    },
        button: {
            marginLeft: 10,
            marginRight: 10
        }
})