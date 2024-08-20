import {Pressable, Text, View} from "react-native";
import {registerButtonStyles} from "../../styles/components/RegisterButtonStyles";

const RegisterButton = ({title, onPress}) => {
    return(
        <View style={registerButtonStyles.container}>
            <Pressable
                style={registerButtonStyles.button}
                onPress={onPress}>
                <Text style={registerButtonStyles.text}>{title}</Text>
            </Pressable>
        </View>
    );
}

export default RegisterButton;
