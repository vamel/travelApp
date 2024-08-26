import {Text, TextInput, View} from "react-native";
import {userBioInputStyles} from "../../styles/components/register/userBioInputStyles";

interface IUserBioInputProps {
    onChangeText: (string) => void
}

const UserBioInput = (props: IUserBioInputProps) => {
    const placeholder = "But keep it short, max 1000 characters allowed!";

    return(
        <View style={userBioInputStyles.container}>
            <Text style={userBioInputStyles.title}>Write something nice about yourself</Text>
            <Text style={userBioInputStyles.subtitle}>Be creative!</Text>
            <TextInput
                onChangeText={props.onChangeText}
                maxLength={1000}
                numberOfLines={5}
                placeholder={placeholder}
                multiline={true}
                style={userBioInputStyles.inputField}
            />
        </View>
    );
}

export default UserBioInput;
