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
            marginTop: 4,
            marginBottom: 10,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 24,
            color: COLORS.universal.orange500
        },
        signOutContainer: {
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20
        }
    }
);
