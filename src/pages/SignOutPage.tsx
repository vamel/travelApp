import {View, Text} from "react-native";
import LoginButton from "../components/login/LoginButton";
import loginPageStyles from "../styles/pages/LoginPageStyles";

const SignOutPage = ({navigation}) => {
    const handleSignOutPress = () => {
        navigation.navigate("SignInPage");
    }

    return(
        <View style={loginPageStyles.container}>
            <Text style={[loginPageStyles.title, {marginBottom: 60}]}>Signed out successfully!</Text>
            <LoginButton
                onPress={handleSignOutPress}
                title={"Go back to sign in"}
                backgroundColor={"#E3885F"}
                textColor={"white"}/>
        </View>
    );
}

export default SignOutPage;
