import {Platform, StatusBar, StyleSheet} from "react-native";

const statusBarHeight = StatusBar.currentHeight;

export const createInvitationPageStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: Platform.OS === "android" ? 25 + statusBarHeight : 0,
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'center',
        }
    }
);
