import {Text, TextInput, View} from "react-native";
import {invitationMessageInputStyles} from "../../styles/components/invitation/invitationMessageInputStyles";

interface IInvitationMessageInputProps {
    onChangeText: (string) => void
}

const InvitationMessageInput = (props: IInvitationMessageInputProps) => {
    return(
        <View style={invitationMessageInputStyles.container}>
            <Text style={invitationMessageInputStyles.title}>Greet person with a message!</Text>
            <TextInput
                onChangeText={props.onChangeText}
                maxLength={1000}
                numberOfLines={5}
                placeholder={"Write something nice"}
                multiline={true}
                style={invitationMessageInputStyles.inputField}
            />
        </View>
    );
}

export default InvitationMessageInput;
