import {TextInput} from "react-native";
import singInPageStyles from "../../styles/pages/singInPageStyles";

interface  IPasswordInputProps {
    placeholder: string,
    onTextChange: (string) => void,
    value: string
}

const PasswordInput = (props: IPasswordInputProps) => {
    return(
        <TextInput
            placeholder={props.placeholder}
            onChangeText={props.onTextChange}
            value={props.value}
            style={singInPageStyles.textInput}
            autoCapitalize={"none"}
            secureTextEntry={true}
        />
    );
}

export default PasswordInput;
