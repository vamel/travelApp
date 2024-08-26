import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const registerItemTileStyles = StyleSheet.create(
    {
        container: {
            minWidth: 100,
            height: 30,
            marginVertical: 4,
            marginHorizontal: 4,
            paddingHorizontal: 15,
            borderRadius: 20,
            backgroundColor: COLORS.universal.purple500,
            justifyContent: "center",
            alignItems: "center",
            overflow: "scroll"
        },
        text: {
            fontWeight: "bold",
            fontSize: 16,
            color: COLORS.universal.white,
            flexWrap: "wrap"
        }
    }
);
