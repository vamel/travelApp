import {StyleSheet} from "react-native";
import COLORS from "../../utils/Colors";

export const userDashboardStyles = StyleSheet.create(
    {
        userDashboardContainer: {
            flex: 1,
            alignItems: "center"
        },
        userNameText: {
            marginTop: 4,
            marginBottom: 10,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 24,
            color: COLORS.universal.orange500
        }
    }
);
