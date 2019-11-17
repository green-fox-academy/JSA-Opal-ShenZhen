import { StyleSheet } from 'react-native';

let displayBorder = (width = 2, style = "solid", color = "black") => (
    {
        borderWidth: width,
        borderStyle: style,
        borderColor: color,
    }
)

export default StyleSheet.create({
    portfolioArea: {
        // ...displayBorder(3, "solid", "#0984e3"),
        alignItems: "center",
    },
});