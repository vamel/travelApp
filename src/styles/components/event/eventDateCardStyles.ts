import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const eventDateCardStyles = StyleSheet.create(
    {
        container: {
            width: 150,
            height: 150,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: COLORS.universal.white
        },
        text: {
            width: 150,
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center"
        }
    }
);
