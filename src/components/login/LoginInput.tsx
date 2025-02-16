import singInPageStyles from "../../styles/pages/singInPageStyles";
import {TextInput} from "react-native";

interface ILoginInputProps {
    placeholder: string,
    onTextChange: (string) => void,
    value: string
}

const LoginInput = (props: ILoginInputProps) => {
    return(
        <TextInput
            placeholder={props.placeholder}
            onChangeText={props.onTextChange}
            value={props.value}
            style={singInPageStyles.textInput}
            autoCapitalize={"none"}
        />
    );
}

export default LoginInput;
