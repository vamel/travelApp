import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const invitationMessageInputStyles = StyleSheet.create(
    {
        container: {
            marginTop: 10,
            marginBottom: 10,
            justifyContent: "center",
            alignItems: "center"
        },
        title: {
            marginBottom: 4,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.universal.orange500
        },
        subtitle: {
            marginBottom: 10,
            fontSize: 16,
            textAlign: "center",
            color: COLORS.register.gray700
        },
        inputField: {
            width: 320,
            height: 150,
            padding: 8,
            textAlignVertical: "top",
            flexWrap: "wrap",
            borderRadius: 5,
            backgroundColor: COLORS.universal.gray500
        }
    }
);
