import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const inputFieldStyles = StyleSheet.create(
    {
        container: {
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center"
        },
        title: {
            marginBottom: 8,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.universal.orange500
        },
        inputField: {
            width: 320,
            padding: 8,
            borderRadius: 5,
            backgroundColor: COLORS.universal.gray500
        },
        errorText: {
            fontSize: 14,
            textAlign: "center",
            color: COLORS.universal.red500
        }
    }
);
