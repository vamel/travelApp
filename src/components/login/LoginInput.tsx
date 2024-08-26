import singInPageStyles from "../../styles/pages/singInPageStyles";
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
            style={singInPageStyles.textInput}
        />
    );
}

export default LoginInput;
