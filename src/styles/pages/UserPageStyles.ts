import {Platform, StatusBar, StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

const statusBarHeight = StatusBar.currentHeight;

export const userPageStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: Platform.OS === "android" ? 25 + statusBarHeight : 0,
            justifyContent: "center",
            alignItems: "center"
        },
        mainInfoContainer: {
            height: 220,
            width: 380,
            marginHorizontal: 10,
            flexDirection: "row",
            justifyContent: "flex-start"
        },
        profilePicture: {
            width: 190,
            height: 190,
            borderWidth: 5,
            borderColor: COLORS.universal.orange500
        },
        userDashboardContainer: {
            flex: 1,
            alignItems: "center"
        },
        userNameText: {
            marginBottom: 10,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 20,
            color: COLORS.universal.orange500
        },
        userBio: {
            marginBottom: 20,
            fontSize: 16,
            textAlign: "center",
            color: COLORS.universal.white
        },
        userDetailsContainer: {
            flex: 1,
            marginHorizontal: 20,
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: COLORS.universal.orange500
        },
        userInfoFieldContainer: {
            flexDirection: "row",
            width: "100%",
            paddingVertical: 8,
            justifyContent: "flex-start",
            borderBottomWidth: 2,
            borderBottomColor: COLORS.universal.white
        },
        userInfoFieldTitle: {
            width: 80,
            paddingLeft: 4,
            fontWeight: "bold",
            fontSize: 20,
            color: COLORS.universal.white
        },
        userInfoFieldValue: {
            width: 200,
            fontSize: 20,
            textAlign: "right",
            color: COLORS.universal.white
        }
    }
);
