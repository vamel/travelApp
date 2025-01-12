import {Text, TextInput, View} from "react-native";
import {inputFieldStyles} from "../../styles/components/utils/inputFieldStyles";

interface ICreateProfileInputProps {
    title: string,
    placeholder: string,
    maxLength: number,
    keyboardType: string,
    errorMsg?: string,
    onChangeText: (string) => void
}

const CreateProfileInput = (props: ICreateProfileInputProps) => {
    return(
        <View style={inputFieldStyles.container}>
            <Text style={inputFieldStyles.title}>{props.title}</Text>
            <TextInput
                onChangeText={props.onChangeText}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                keyboardType={props.keyboardType === "default" ? "default" : "numeric"}
                style={inputFieldStyles.inputField}
            />
            {props.errorMsg && <Text style={inputFieldStyles.errorText}>{props.errorMsg}</Text>}
        </View>
    );
}

export default CreateProfileInput;
