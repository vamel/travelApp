import {View, Text, TextInput, TouchableWithoutFeedback} from "react-native";
import {sendPasswordResetEmail} from "firebase/auth";
import singInPageStyles from "../styles/pages/singInPageStyles";
import LoginButton from "../components/login/LoginButton";
import {useState} from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import COLORS from "../styles/utils/Colors";
import {auth} from "../firebase/config";

const ResetPasswordPage = ({navigation}) => {
    const [emailInput, setEmailInput] = useState("");
    const [isRecoveryClicked, setIsRecoveryClicked] = useState(false);

    const handleSendRecoveryRequest = () => {
        sendPasswordResetEmail(auth, emailInput).then(() => setIsRecoveryClicked(true));
    }

    const handleReturnToSignInScreen = () => {
        navigation.navigate("SignInPage");
    }

    if (isRecoveryClicked) {
        return(
            <View style={singInPageStyles.container}>
                <Text style={singInPageStyles.title}>Success!</Text>
                <Text style={singInPageStyles.forgottenPasswordText}>
                    We have sent a reset link to{"\n"}
                    <Text style={singInPageStyles.emailRecoveredText}> {emailInput}</Text>
                </Text>
                <View style={singInPageStyles.recoveryGoBackContainer}>
                    <LoginButton
                        onPress={handleReturnToSignInScreen}
                        title={"Go back to sign in"}
                        backgroundColor={"#E3885F"}
                        textColor={"white"}/>
                </View>
                <View style={singInPageStyles.recoveryPromptContainer}>
                    <Text style={singInPageStyles.registerPromptText}>Didn't receive your link?</Text>
                    <TouchableWithoutFeedback accessibilityRole={"link"} onPress={handleSendRecoveryRequest}>
                        <View>
                            <Text style={singInPageStyles.registerPromptLink}>Click here to resend it.</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }

    return(
        <View style={singInPageStyles.container}>
            <Text style={singInPageStyles.title}>Forgot your password?</Text>
            <Text style={singInPageStyles.forgottenPasswordText}>
                Just enter Your email address and we'll send you instructions to reset it.
            </Text>
            <View style={singInPageStyles.inputContainer}>
                <TextInput
                    placeholder={"Email"}
                    onChangeText={setEmailInput}
                    value={emailInput}
                    autoCapitalize={"none"}
                    style={singInPageStyles.textInput}
                />
                <View style={singInPageStyles.buttonContainers}>
                    <LoginButton
                        onPress={handleSendRecoveryRequest}
                        title={"Reset my password"}
                        backgroundColor={COLORS.universal.orange500}
                        textColor={"white"}/>
                    <View style={singInPageStyles.goBackToLogInContainer}>
                        <MaterialIcons name="arrow-back" size={20} color={"#6e6d6d"} />
                        <TouchableWithoutFeedback accessibilityRole={"link"} onPress={handleReturnToSignInScreen}>
                            <View>
                                <Text style={singInPageStyles.goBackToLogInText}>Go back to sign in.</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ResetPasswordPage;
