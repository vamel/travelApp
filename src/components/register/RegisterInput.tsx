import {TextInput} from "react-native";
import {registerPageStyles} from "../../styles/pages/registerPageStyles";

interface RegisterInputProps {
    placeholder: string,
    onTextChange: (string) => void,
    value: string,
    secure: boolean
}

const RegisterInput = (props: RegisterInputProps) => {
    return(
        <TextInput
            placeholder={props.placeholder}
            onChangeText={props.onTextChange}
            value={props.value}
            style={registerPageStyles.textInput}
            secureTextEntry={props.secure}
            autoCapitalize={"none"}
        />
    );
}

export default RegisterInput;
