import loginPageStyles from "../../styles/pages/LoginPageStyles";
import {TextInput} from "react-native";

interface LoginInputProps {
    placeholder: string,
    onTextChange: (string) => void,
    value: string
}

const LoginInput = (props: LoginInputProps) => {
    return(
        <TextInput
            placeholder={props.placeholder}
            onChangeText={props.onTextChange}
            value={props.value}
            style={loginPageStyles.textInput}
        />
    );
}

export default LoginInput;
