import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const userInfoFieldStyles = StyleSheet.create(
    {
        userInfoFieldContainer: {
            flexDirection: "row",
            width: "100%",
            paddingVertical: 20,
            justifyContent: "flex-start",
            borderBottomWidth: 1,
            borderBottomColor: COLORS.universal.white
        },
        userInfoFieldTitle: {
            width: 120,
            paddingLeft: 4,
            fontWeight: "bold",
            fontSize: 16,
            color: COLORS.universal.white
        },
        userInfoFieldValue: {
            width: 200,
            fontSize: 16,
            textAlign: "right",
            color: COLORS.universal.white
        }
    }
);
