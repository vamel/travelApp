import {Platform, StatusBar, StyleSheet} from "react-native";

const statusBarHeight = StatusBar.currentHeight;

export const userPageStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: Platform.OS === "android" ? 25 + statusBarHeight : 0,
            justifyContent: "center",
            alignItems: "center"
        }
    }
);
