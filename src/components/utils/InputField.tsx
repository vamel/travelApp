import {Text, TextInput, View} from "react-native";
import {inputFieldStyles} from "../../styles/components/utils/inputFieldStyles";

interface IEditProfileInputProps {
    title: string,
    value: string,
    maxLength: number,
    keyboardType: string,
    onChangeText: (string) => void
}

const InputField = (props: IEditProfileInputProps) => {
    return(
        <View style={inputFieldStyles.container}>
            <Text style={inputFieldStyles.title}>{props.title}</Text>
            <TextInput
                onChangeText={props.onChangeText}
                value={props.value}
                maxLength={props.maxLength}
                keyboardType={props.keyboardType === "default" ? "default" : "numeric"}
                style={inputFieldStyles.inputField}
            />
        </View>
    );
}

export default InputField;
