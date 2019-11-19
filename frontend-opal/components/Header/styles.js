import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    search: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        height: 50,
        alignContent: "center",
        backgroundColor: "#0984e3"
    },
    listIcon: {
        marginTop: 14,
        marginLeft: 20,
        width: 25,
        height: 25,

    },
    input: {
        marginTop: 10,
        width: "75%",
        height: 30,
        backgroundColor: "white",
    },
    searchButton: {
        marginTop: 14,
        marginRight: 20,
        width: 25,
        height: 25,
    },

    navBars: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    narTitle: {
        padding: 2,
        width: "50%",
        height: 50,
        textAlign: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#e17055",
        fontSize: 12
    },
})