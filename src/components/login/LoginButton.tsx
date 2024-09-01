import { Pressable, View, Text } from "react-native";
import {loginButtonStyles} from "../../styles/components/login/loginButtonStyles";

interface ILoginButtonProps {
    title: string,
    backgroundColor: string,
    textColor: string,
    onPress: () => void
}
function LoginButton(props: ILoginButtonProps) {
    return(
        <View style={loginButtonStyles.container}>
            <Pressable
                style={[loginButtonStyles.button, {backgroundColor: props.backgroundColor, color: props.textColor}]}
                onPress={props.onPress}>
                <Text style={loginButtonStyles.text}>{props.title}</Text>
            </Pressable>
        </View>
    );
}

export default LoginButton;


