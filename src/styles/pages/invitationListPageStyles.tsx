import {Platform, StatusBar, StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

const statusBarHeight = StatusBar.currentHeight;

export const invitationListPageStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: Platform.OS === "android" ? 25 + statusBarHeight : 0,
            justifyContent: "center",
            alignItems: "center"
        },
        title: {
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.universal.orange500
        },
        subtitle: {
            marginBottom: 10,
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.universal.orange500
        }
    }
);
