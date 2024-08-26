import {Text, TextInput, View} from "react-native";
import {createProfileInputStyles} from "../../styles/components/register/createProfileInputStyles";

interface ICreateProfileInputProps {
    title: string,
    placeholder: string,
    maxLength: number,
    keyboardType: string,
    onChangeText: (string) => void
}

const CreateProfileInput = (props: ICreateProfileInputProps) => {
    return(
        <View style={createProfileInputStyles.container}>
            <Text style={createProfileInputStyles.title}>{props.title}</Text>
            <TextInput
                onChangeText={props.onChangeText}
                placeholder={props.placeholder}
                maxLength={props.maxLength}
                keyboardType={props.keyboardType === "default" ? "default" : "numeric"}
                style={createProfileInputStyles.inputField}
            />
        </View>
    );
}

export default CreateProfileInput;
