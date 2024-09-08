import {Platform, StatusBar, StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

const statusBarHeight = StatusBar.currentHeight;

export const invitationPageStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: Platform.OS === "android" ? 25 + statusBarHeight : 0,
            flexDirection: "column",
        },
        scrollView: {
            justifyContent: "center",
            alignItems: "center",
        },
        invitationInfoContainer: {
            width: 325,
            marginTop: 15,
            marginHorizontal: 30,
        },
        title: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.attraction.orange300
        },
        invitationInfoField: {
            flexDirection: "row",
            width: "100%",
            paddingVertical: 20,
            justifyContent: "flex-start",
            borderBottomWidth: 1,
            borderBottomColor: COLORS.universal.white
        },
        fieldTitle: {
            marginBottom: 8,
            fontSize: 20,
            fontWeight: "bold",
            color: COLORS.attraction.orange800
        },
        fieldValue: {
            fontSize: 16,
            marginBottom: 10,
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
