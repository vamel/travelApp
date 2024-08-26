import {Text, TouchableWithoutFeedback, View} from "react-native";
import { useState } from "react";
import singInPageStyles from "../styles/pages/singInPageStyles";
import LoginButton from "../components/login/LoginButton";
import LoginInput from "../components/login/LoginInput";

const SignInPage = ({navigation}) => {
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const handleLoginPress = () => {
        navigation.navigate("TabNavigation");
    }

    const handleRegisterPress = () => {
        navigation.navigate("RegisterPage");
    }

    const handlePasswordForgottenPress = () => {
        navigation.navigate("ResetPasswordPage");
    }

    return(
        <View style={singInPageStyles.container}>
            <Text style={singInPageStyles.title}>Sign in to TravelApp</Text>
                <View style={singInPageStyles.inputContainer}>
                    <LoginInput placeholder={"Login"} onTextChange={setLoginInput} value={loginInput} />
                    <LoginInput placeholder={"Password"} onTextChange={setPasswordInput} value={passwordInput} />
                    <View style={singInPageStyles.buttonContainers}>
                        <LoginButton
                            onPress={handleLoginPress}
                            title={"Sign in"}
                            backgroundColor={"#E3885F"}
                            textColor={"white"}/>
                    </View>
                    <View style={singInPageStyles.forgotPassword}>
                        <TouchableWithoutFeedback accessibilityRole={"link"} onPress={handlePasswordForgottenPress}>
                            <View>
                                <Text style={singInPageStyles.forgotPasswordText}>Forgot Password?</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={singInPageStyles.registerPromptContainer}>
                        <Text style={singInPageStyles.registerPromptText}>Don't have an account?</Text>
                            <TouchableWithoutFeedback accessibilityRole={"link"} onPress={handleRegisterPress}>
                                <View>
                                    <Text style={singInPageStyles.registerPromptLink}>Sign up now!</Text>
                                </View>
                            </TouchableWithoutFeedback>
                    </View>
                </View>
        </View>
    );
}

export default SignInPage;
