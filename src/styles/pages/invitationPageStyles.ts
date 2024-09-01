import {StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

export const invitationPageStyles = StyleSheet.create(
    {
        actionsContainer: {
            marginTop: 10,
            flexDirection: "row",
        },
        actionButton: {
            height: 40,
            width: 40,
            marginHorizontal: 20,
            borderRadius: 20,
        },
        accept: {

            backgroundColor: COLORS.universal.green500
        },
        reject: {
            backgroundColor: COLORS.universal.red500
        },
    }
);
