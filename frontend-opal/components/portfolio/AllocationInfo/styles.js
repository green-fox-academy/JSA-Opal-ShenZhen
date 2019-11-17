import { StyleSheet } from 'react-native';

let displayBorder = (width = 2, style = "solid", color = "black") => (
    {
        borderWidth: 0,
        borderStyle: style,
        borderColor: color,
    }
)

export default StyleSheet.create({
/* ------------------------ Allocation Area ------------------------ 
- a pie chart
- two buttons
------------------------------------------------------------------ */
    allocationArea: {
        // ...displayBorder(3, "solid", "#e17055"),
        width: "92%",
        height: 280,
        marginTop: 10,

    },
    pie: {
        // ...displayBorder(2, "solid", "black"),
        width: "100%",
        height: 220,

        backgroundColor: "#DFF1FD",
    },
    allocationButtons: {
        // ...displayBorder(2, "solid", "#fd79a8"),
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",

    },
    button: {
        // ...displayBorder(1, "solid", "#00cec9"),
        // width: 60,
        height: 40,
        padding: 12,
        textAlign: "left",

        fontSize: 16
    },
})