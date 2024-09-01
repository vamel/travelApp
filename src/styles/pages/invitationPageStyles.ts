import {Platform, StatusBar, StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

const statusBarHeight = StatusBar.currentHeight;

export const invitationPageStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: Platform.OS === "android" ? 25 + statusBarHeight : 0,
            justifyContent: "center",
            alignItems: "center"
        },
        actionsContainer: {
            marginTop: 10,
            flexDirection: "row",
        },
        actionButton: {
            height: 40,
            width: 40,
            marginHorizontal: 20,
            borderRadius: 20,
        },
        accept: {

            backgroundColor: COLORS.universal.green500
        },
        reject: {
            backgroundColor: COLORS.universal.red500
        },
    }
);
