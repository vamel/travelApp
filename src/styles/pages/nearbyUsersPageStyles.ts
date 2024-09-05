import {Platform, StatusBar, StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

const statusBarHeight = StatusBar.currentHeight;

export const nearbyUsersPageStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexGrow: 1,
            marginTop: Platform.OS === "android" ? 25 + statusBarHeight : 0,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'center',
        },
        titleText: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: COLORS.universal.orange500
        },
        listContainer: {
            flexGrow: 1,
            paddingTop: 10,
            paddingBottom: 40
        },
        rippleAndroid: {
            color: "#CCCCCC"
        },
        buttonPressed: {
            opacity: 0.75
        }
    }
);
