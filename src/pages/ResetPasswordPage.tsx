import {View, Text, TextInput, TouchableWithoutFeedback} from "react-native";
import loginPageStyles from "../styles/pages/LoginPageStyles";
import LoginButton from "../components/login/LoginButton";
import {useState} from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import COLORS from "../styles/utils/Colors";

const ResetPasswordPage = ({navigation}) => {
    const [emailInput, setEmailInput] = useState("");
    const [isRecoveryClicked, setIsRecoveryClicked] = useState(false);

    const handleSendRecoveryRequest = () => {
        setIsRecoveryClicked(true);
    }

    const handleReturnToSignInScreen = () => {
        navigation.navigate("SignInPage");
    }

    if (isRecoveryClicked) {
        return(
            <View style={loginPageStyles.container}>
                <Text style={loginPageStyles.title}>Success!</Text>
                <Text style={loginPageStyles.forgottenPasswordText}>
                    We have sent a reset link to{"\n"}
                    <Text style={loginPageStyles.emailRecoveredText}> {emailInput}</Text>
                </Text>
                <View style={loginPageStyles.recoveryGoBackContainer}>
                    <LoginButton
                        onPress={handleReturnToSignInScreen}
                        title={"Go back to sign in"}
                        backgroundColor={"#E3885F"}
                        textColor={"white"}/>
                </View>
                <View style={loginPageStyles.recoveryPromptContainer}>
                    <Text style={loginPageStyles.registerPromptText}>Didn't receive your link?</Text>
                    <TouchableWithoutFeedback accessibilityRole={"link"} onPress={handleSendRecoveryRequest}>
                        <View>
                            <Text style={loginPageStyles.registerPromptLink}>Click here to resend it.</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }

    return(
        <View style={loginPageStyles.container}>
            <Text style={loginPageStyles.title}>Forgot your password?</Text>
            <Text style={loginPageStyles.forgottenPasswordText}>
                Just enter Your email address and we'll send you instructions to reset it.
            </Text>
            <View style={loginPageStyles.inputContainer}>
                <TextInput
                    placeholder={"Email"}
                    onChangeText={setEmailInput}
                    value={emailInput}
                    style={loginPageStyles.textInput}/>
                <View style={loginPageStyles.buttonContainers}>
                    <LoginButton
                        onPress={handleSendRecoveryRequest}
                        title={"Reset my password"}
                        backgroundColor={COLORS.universal.orange500}
                        textColor={"white"}/>
                    <View style={loginPageStyles.goBackToLogInContainer}>
                        <MaterialIcons name="arrow-back" size={20} color={"#6e6d6d"} />
                        <TouchableWithoutFeedback accessibilityRole={"link"} onPress={handleReturnToSignInScreen}>
                            <View>
                                <Text style={loginPageStyles.goBackToLogInText}>Go back to sign in.</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ResetPasswordPage;
