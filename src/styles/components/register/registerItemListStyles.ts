import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const registerItemListStyles = StyleSheet.create(
    {
        listContainer: {
            marginTop: 20,
        },
        title: {
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.universal.orange500
        },
        list: {
            marginTop: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
        }
    }
);
