import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    search: {
        // Display & Box Model
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        height: 50,
        alignContent: "center",

        // Other
        backgroundColor: "#0984e3"
    },
    listIcon: {
        // Position
        marginTop: 14,
        marginLeft: 20,

        // Display & Box Model
        width: 25,
        height: 25,

    },
    input: {
        // Position
        marginTop: 10,

        // Display & Box Model
        width: "75%",
        height: 30,

        backgroundColor: "white",
    },
    searchButton: {
        // Position
        marginTop: 14,
        marginRight: 20,

        // Display & Box Model
        width: 25,
        height: 25,
    },

    navBars: {
        // Display & Box Model
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    narTitle: {
        // Display & Box Model
        padding: 2,
        width: "50%",
        height: 50,
        textAlign: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#e17055",

        // Other
        fontSize: 12
    },
})