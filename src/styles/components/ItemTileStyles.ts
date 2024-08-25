import {StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

export const itemTileStyles = StyleSheet.create(
    {
        container: {
            minWidth: 100,
            height: 30,
            paddingHorizontal: 15,
            borderRadius: 20,
            backgroundColor: COLORS.universal.orange500,
            justifyContent: "center",
            alignItems: "center"
        },
        text: {
            fontWeight: "bold",
            fontSize: 16,
            color: COLORS.universal.white
        }
    }
);
