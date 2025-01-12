import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const addNewButtonStyles = StyleSheet.create(
    {
        button: {
            width: 110,
            height: 50,
            marginTop: 10,
            marginLeft: 5,
            padding: 5,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: COLORS.attraction.orange100
        },
        iconContainer: {
            width: 20,
            textAlign: "center",
            marginLeft: 4
        },
        icon: {
            color: COLORS.universal.white
        },
        pressed: {
            opacity: 0.7
        },
        text: {
            width: 70,
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 16,
            color: COLORS.universal.white
        }
    }
);
