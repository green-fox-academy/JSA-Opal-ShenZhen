import { StyleSheet } from 'react-native';

let displayBorder = (width = 2, style = "solid", color = "black") => (
    {
        borderWidth: 0,
        borderStyle: style,
        borderColor: color,
    }
)

export default StyleSheet.create({
/* ------------------------ Value Area ------------------------ 
    - a title
    - a investment value
    - a button
------------------------------------------------------------------ */
    valueArea: {
        // ...displayBorder(3, "solid", "#fdcb6e"),
        width: "92%",
        height: 280,
        // margin: 10,
        margin: 15

    },
    title: {
        fontSize: 16
    },
    investment: {
        // Display & Box Model
        // ...displayBorder(2, "solid", "#fab1a0"),

        // Other
        backgroundColor: "#DFF1FD",
    },
    name: {
        // Display & Box Model
        // ...displayBorder(1, "solid", "#00cec9"),
        width: "100%",
        height: 110,
        padding: 20,

        fontSize: 35,
    },
    amount: {
        // Display & Box Model
        // ...displayBorder(1, "solid", "#00cec9"),
        width: "100%",
        height: 110,
        padding: 10,
        textAlign: "right",

        fontSize: 80,
        color: "#e17055"
    },
    button: {
        // ...displayBorder(1, "solid", "#00cec9"),
        // width: 60,
        height: 40,
        padding: 12,
        textAlign: "left",

        // Other
        fontSize: 16
    },
});
