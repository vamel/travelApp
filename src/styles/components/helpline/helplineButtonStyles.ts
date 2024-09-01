import {Dimensions, StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

const deviceWidth = Dimensions.get("window").width

export const helplineButtonStyles = StyleSheet.create({
    container: {
        marginVertical: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        padding: 10,
        width: 0.9 * deviceWidth,
        borderRadius: 20,
        backgroundColor: COLORS.universal.purple500,
        elevation: 4,
        alignItems: "center",
    },
    text: {
        fontSize: 16,
        color: COLORS.universal.white
    }
})
