import {Text, TextInput, TouchableWithoutFeedback, View} from "react-native";
import { useState } from "react";
import loginPageStyles from "../styles/pages/LoginPageStyles";
import LoginButton from "../components/login/LoginButton";

const SignInPage = ({navigation}) => {
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const handleLoginPress = () => {
        navigation.navigate("TabNavigation");
    }

    const handleRegisterPress = () => {
        console.log("REGISTER PLACEHOLDER");
    }

    const handlePasswordForgottenPress = () => {
        navigation.navigate("ResetPasswordPage");
    }


    return(
        <View style={loginPageStyles.container}>
            <Text style={loginPageStyles.title}>Sign in to TravelApp</Text>
                <View style={loginPageStyles.inputContainer}>
                    <TextInput
                        placeholder={"Login"}
                        onChangeText={setLoginInput}
                        value={loginInput}
                        style={loginPageStyles.textInput}/>
                    <TextInput
                        placeholder={"Password"}
                        onChangeText={setPasswordInput}
                        value={passwordInput}
                        style={loginPageStyles.textInput}/>
                    <View style={loginPageStyles.buttonContainers}>
                        <LoginButton
                            onPress={handleLoginPress}
                            title={"Sign in"}
                            backgroundColor={"#E3885F"}
                            textColor={"white"}/>
                    </View>
                    <View style={loginPageStyles.forgotPassword}>
                        <TouchableWithoutFeedback accessibilityRole={"link"} onPress={handlePasswordForgottenPress}>
                            <View>
                                <Text style={loginPageStyles.forgotPasswordText}>Forgot Password?</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={loginPageStyles.registerPromptContainer}>
                        <Text style={loginPageStyles.registerPromptText}>Don't have an account?</Text>
                            <TouchableWithoutFeedback accessibilityRole={"link"} onPress={handleRegisterPress}>
                                <View>
                                    <Text style={loginPageStyles.registerPromptLink}>Sign up now!</Text>
                                </View>
                            </TouchableWithoutFeedback>
                    </View>
                </View>
        </View>
    );
}

export default SignInPage;
