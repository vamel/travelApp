import {Pressable, Text, View} from "react-native";
import {registerButtonStyles} from "../../styles/components/register/registerButtonStyles";

interface IRegisterButtonProps {
    title: string,
    onPress: () => void
}

const RegisterButton = (props: IRegisterButtonProps) => {
    return(
        <View style={registerButtonStyles.container}>
            <Pressable
                style={registerButtonStyles.button}
                onPress={props.onPress}>
                <Text style={registerButtonStyles.text}>{props.title}</Text>
            </Pressable>
        </View>
    );
}

export default RegisterButton;
