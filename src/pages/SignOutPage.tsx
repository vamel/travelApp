import {View, Text} from "react-native";
import LoginButton from "../components/login/LoginButton";
import singInPageStyles from "../styles/pages/singInPageStyles";

const SignOutPage = ({navigation}) => {
    const handleSignOutPress = () => {
        navigation.navigate("SignInPage");
    }

    return(
        <View style={singInPageStyles.container}>
            <Text style={[singInPageStyles.title, {marginBottom: 60}]}>Signed out successfully!</Text>
            <LoginButton
                onPress={handleSignOutPress}
                title={"Go back to sign in"}
                backgroundColor={"#E3885F"}
                textColor={"white"}/>
        </View>
    );
}

export default SignOutPage;
