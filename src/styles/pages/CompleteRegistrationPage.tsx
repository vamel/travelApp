import {Text, View} from "react-native";
import RegisterButton from "../../components/register/RegisterButton";
import {completeRegistrationPageStyles} from "./completeRegistrationPageStyles";

const CompleteRegistrationPage = ({navigation}) => {
    const handleButtonPress = () => {
        navigation.navigate("SignInPage");
    }

    return(
        <View style={completeRegistrationPageStyles.container}>
            <Text style={completeRegistrationPageStyles.title}>All set up!</Text>
            <Text style={completeRegistrationPageStyles.emailSentText}>
                We've sent you an email with instructions on confirming your account.
            </Text>
            <RegisterButton title={"Return to sign in"} onPress={handleButtonPress} />
        </View>
    );
}

export default CompleteRegistrationPage;
