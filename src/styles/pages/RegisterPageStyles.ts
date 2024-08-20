import {Platform, StatusBar, StyleSheet} from "react-native";
import COLORS from "../utils/Colors";

const statusBarHeight = StatusBar.currentHeight;

export const registerPageStyles = StyleSheet.create(
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
            marginTop: 4,
            fontSize: 16,
            textAlign: "center",
            color: COLORS.register.gray700
        },
        registerForm: {
            marginTop: 20
        },
        textInput: {
            marginTop: 16,
            width: 300,
            height: 40,
            paddingLeft: 16,
            fontSize: 18,
            backgroundColor: COLORS.universal.gray500,
            borderRadius: 20,
        },
        passwordHintText: {
            marginTop: 12,
            width: 300,
            fontSize: 12,
            textAlign: "center",
            color: COLORS.register.gray800
        },
        registerPromptContainer: {
            marginTop: 32,
            flexDirection: "row",
            justifyContent: "center"
        },
        registerPromptText: {
            color: COLORS.register.gray800,
            fontWeight: "500"
        },
        registerPromptLink: {
            marginLeft: 4,
            color: COLORS.universal.orange500,
            fontWeight: "800"
        }
    }
);
