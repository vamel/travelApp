import {StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

export const completeRegistrationPageStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
        title: {
            fontSize: 28,
            fontWeight: "bold",
            color: COLORS.universal.orange500
        },
        emailSentText: {
            width: 300,
            marginTop: 8,
            textAlign: "center",
            fontSize: 16,
            color: COLORS.register.gray900
        },
    }
);
