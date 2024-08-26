import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const registerButtonStyles = StyleSheet.create(
    {
        container: {
            marginTop: 32,
            justifyContent: "center",
            alignItems: "center"
        },
        button: {
            padding: 10,
            width: 300,
            borderRadius: 20,
            backgroundColor: COLORS.universal.orange500,
            elevation: 4,
            alignItems: "center",
        },
        text: {
            fontSize: 16,
            color: COLORS.universal.white
        }
    }
);
