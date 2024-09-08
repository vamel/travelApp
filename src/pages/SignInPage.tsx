import {Text, TouchableWithoutFeedback, View} from "react-native";
import {useContext, useState} from "react";
import singInPageStyles from "../styles/pages/singInPageStyles";
import LoginButton from "../components/login/LoginButton";
import LoginInput from "../components/login/LoginInput";
import PasswordInput from "../components/login/PasswordInput";
import COLORS from "../styles/utils/Colors";
import {handleSignIn} from "../firebase/auth";
import {AuthContext} from "../store/user/auth-context";
import {signInWithEmailAndPassword} from "firebase/auth";

const SignInPage = ({navigation}) => {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const authCtx = useContext(AuthContext);

    const handleLoginPress = async () => {
        try {
            const userData = await handleSignIn(emailInput, passwordInput);
            authCtx.authenticate(userData.accessToken, userData.uid)
            authCtx.getData(userData.uid);
            navigation.navigate("AuthenticatedTabNavigation");
        } catch(err) {
            setErrorMsg("Invalid credentials");
        }
    }

    const handleContinueWithoutAccountPress = () => {
        //@ts-ignore
        authCtx.setLocationWithoutAuth().then(() => {
            navigation.navigate("TabNavigation");
        })
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
                    <LoginInput placeholder={"Email"} onTextChange={setEmailInput} value={emailInput} />
                    <PasswordInput placeholder={"Password"} onTextChange={setPasswordInput} value={passwordInput} />
                    {errorMsg && <Text style={singInPageStyles.errorText}>{errorMsg}</Text>}
                    <View style={singInPageStyles.buttonContainers}>
                        <LoginButton
                            onPress={handleLoginPress}
                            title={"Sign in"}
                            backgroundColor={COLORS.universal.orange500}
                            textColor={"white"}
                        />
                        <LoginButton
                            onPress={handleContinueWithoutAccountPress}
                            title={"Continue without account"}
                            backgroundColor={COLORS.universal.purple500}
                            textColor={"white"}
                        />
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
