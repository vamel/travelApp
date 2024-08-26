import { StyleSheet } from "react-native";
import COLORS from "../utils/Colors";

const singInPageStyles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: COLORS.universal.white,
            alignItems: "center",
            justifyContent: "center",
        },
        title: {
            marginBottom: 24,
            fontSize: 28,
            fontWeight: "bold"
        },
        inputContainer: {
            marginHorizontal: 16,
            width: 350,
            backgroundColor: COLORS.universal.white,
            alignItems: "center",
            justifyContent: "center"
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
        forgotPassword: {
            marginTop: 24,
            justifyContent: "flex-end",
            alignItems: "flex-end"
        },
        forgotPasswordText: {
            color: COLORS.register.gray600,
            textDecorationLine: "underline"
        },
        buttonContainers: {
            marginTop: 24,
            flexDirection: "column"
        },
        registerPromptContainer: {
            marginTop: 64,
            flexDirection: "row",
        },
        registerPromptText: {
            color: COLORS.register.gray800,
            fontWeight: "500"
        },
        registerPromptLink: {
            marginLeft: 8,
            color: COLORS.universal.orange500,
            fontWeight: "800"
        },
        forgottenPasswordText: {
            width: 250,
            color: COLORS.register.gray700,
            fontSize: 16,
            textAlign: "center"
        },
        emailRecoveredText: {
            width: 300,
            marginTop: 8,
            color: COLORS.register.gray900,
            fontWeight: "bold"
        },
        goBackToLogInContainer: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 60
        },
        goBackToLogInText: {
            marginLeft: 4,
            color: COLORS.register.gray800,
            fontWeight: "bold",
            textAlign: "center"
        },
        recoveryGoBackContainer: {
            marginTop: 20
        },
        recoveryPromptContainer: {
            marginTop: 60,
            flexDirection: "row",
        }
    }
)

export default singInPageStyles;
