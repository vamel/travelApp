import {StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

export const profileButtonStyles = StyleSheet.create(
    {
        button: {
            width: 150,
            height: 40,
            margin: 4,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: COLORS.universal.purple500
        },
        iconContainer: {
            width: 20,
            textAlign: "center",
            marginLeft: 12,
            marginRight: 8
        },
        icon: {
            color: COLORS.universal.white
        },
        pressed: {
            opacity: 0.7
        },
        text: {
            width: 100,
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 16,
            color: COLORS.universal.white
        }
    }
);
