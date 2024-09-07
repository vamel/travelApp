import {Text, TouchableWithoutFeedback, View} from "react-native";
import {registerPageStyles} from "../styles/pages/registerPageStyles";
import RegisterInput from "../components/register/RegisterInput";
import {useState} from "react";
import RegisterButton from "../components/register/RegisterButton";
import {handleSingUp} from "../firebase/auth";
import { passwordStrength } from 'check-password-strength'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const RegisterPage = ({navigation}) => {
    const [enteredEmailAddress, setEnteredEmailAddress] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleGoBackPress = () => {
        navigation.goBack();
    }

    const handleCreateAccount = async () => {
        if (enteredPassword !== enteredConfirmPassword) {
            setErrorMsg("Passwords must match");
        } else if (passwordStrength(enteredPassword).id < 2) {
            setErrorMsg("Password too weak");
        } else {
            try {
                const uid = await handleSingUp(enteredEmailAddress, enteredPassword);
                navigation.navigate("CreateProfilePage", {
                    uid: uid,
                    email: enteredEmailAddress
                });
            } catch(err) {
                setErrorMsg("Invalid email address");
            }
        }
    }

    return(
        <View style={registerPageStyles.container}>
            <Text style={registerPageStyles.title}>
                Create an account
            </Text>
            <Text style={registerPageStyles.subtitle}>To gain access to more features!</Text>
            <View style={registerPageStyles.registerForm}>
                <RegisterInput
                    placeholder={"Email"}
                    onTextChange={setEnteredEmailAddress}
                    value={enteredEmailAddress}
                    secure={false}
                />
                <RegisterInput
                    placeholder={"Password"}
                    onTextChange={setEnteredPassword}
                    value={enteredPassword}
                    secure={true}
                />
                <Text style={registerPageStyles.passwordHintText}>
                    Password should be minimum 8 characters long and contain a number and a letter.
                </Text>
                <RegisterInput
                    placeholder={"Confirm password"}
                    onTextChange={setEnteredConfirmPassword}
                    value={enteredConfirmPassword}
                    secure={true}
                />
                {errorMsg && <Text style={registerPageStyles.errorText}>{errorMsg}</Text>}
                <RegisterButton onPress={handleCreateAccount} title={"Create an account"} />
                <View style={registerPageStyles.registerPromptContainer}>
                    <Text style={registerPageStyles.registerPromptText}>Already have an account?</Text>
                    <TouchableWithoutFeedback accessibilityRole={"link"} onPress={handleGoBackPress}>
                        <View>
                            <Text style={registerPageStyles.registerPromptLink}>Sign in instead.</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    );
}

export default RegisterPage;
