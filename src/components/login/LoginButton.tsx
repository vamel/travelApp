import { Pressable, View, Text } from "react-native";
import {loginButtonStyles} from "../../styles/components/login/loginButtonStyles";

function LoginButton({title, onPress}) {
    return(
        <View style={loginButtonStyles.container}>
            <Pressable
                style={loginButtonStyles.button}
                onPress={onPress}>
                <Text style={loginButtonStyles.text}>{title}</Text>
            </Pressable>
        </View>
    );
}

export default LoginButton;


