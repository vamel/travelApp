import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const userItemListStyles = StyleSheet.create(
    {
        languageContainer: {
            marginTop: 30,
        },
        title: {
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.universal.white
        },
        languageList: {
            marginTop: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
        }
    }
);
