import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const isAccessibleSwitchStyles = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        marginBottom: 8,
        flexWrap: "wrap",
        width: 300,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: COLORS.universal.orange500
    },
});