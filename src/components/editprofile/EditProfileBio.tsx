import {Text, TextInput, View} from "react-native";
import {userBioInputStyles} from "../../styles/components/register/userBioInputStyles";

interface IEditProfileBioProps {
    value: string,
    onChangeText: (string) => void
}

const EditProfileBio = (props: IEditProfileBioProps) => {
    return(
        <View style={userBioInputStyles.container}>
            <Text style={userBioInputStyles.title}>Change your bio</Text>
            <TextInput
                onChangeText={props.onChangeText}
                maxLength={1000}
                numberOfLines={5}
                value={props.value}
                multiline={true}
                style={userBioInputStyles.inputField}
            />
        </View>
    );
}

export default EditProfileBio;
