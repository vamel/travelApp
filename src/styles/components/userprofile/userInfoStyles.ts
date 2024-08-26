import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const userInfoStyles = StyleSheet.create(
    {
        userDetailsContainer: {
            flex: 1,
            marginHorizontal: 20,
            marginBottom: 20,
            padding: 10,
            paddingBottom: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: COLORS.universal.orange500
        },
        userBio: {
            marginBottom: 20,
            fontSize: 18,
            textAlign: "center",
            color: COLORS.universal.white
        },
    }
);
