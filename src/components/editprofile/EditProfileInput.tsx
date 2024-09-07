import {Text, TextInput, View} from "react-native";
import {createProfileInputStyles} from "../../styles/components/register/createProfileInputStyles";

interface IEditProfileInputProps {
    title: string,
    value: string,
    maxLength: number,
    keyboardType: string,
    onChangeText: (string) => void
}

const EditProfileInput = (props: IEditProfileInputProps) => {
    return(
        <View style={createProfileInputStyles.container}>
            <Text style={createProfileInputStyles.title}>{props.title}</Text>
            <TextInput
                onChangeText={props.onChangeText}
                value={props.value}
                maxLength={props.maxLength}
                keyboardType={props.keyboardType === "default" ? "default" : "numeric"}
                style={createProfileInputStyles.inputField}
            />
        </View>
    );
}

export default EditProfileInput;
