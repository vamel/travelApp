import {Platform, StatusBar, StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

const statusBarHeight = StatusBar.currentHeight;

export const createInvitationPageStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: Platform.OS === "android" ? 25 + statusBarHeight : 0,
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'center',
        },
        title: {
            marginBottom: 4,
            fontWeight: "bold",
            fontSize: 28,
            textAlign: "center",
            color: COLORS.universal.orange500
        },
        errorText: {
            marginTop: 4,
            fontSize: 16,
            fontWeight: "bold",
            color: COLORS.universal.red500
        }
    }
);
