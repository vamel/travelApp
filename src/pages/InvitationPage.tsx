import {View, Text} from "react-native";
import {invitationPageStyles} from "../styles/pages/invitationPageStyles";

const InvitationPage = () => {
    return(
        <View style={invitationPageStyles.container}>
            <View>
                <Text>User's invitation</Text>
            </View>
            <View>
                <Text>Date</Text>
            </View>
            <View>
                <Text>Location: </Text>
            </View>
            <View style={invitationPageStyles.actionsContainer}>
                <View style={[invitationPageStyles.actionButton ,invitationPageStyles.accept]} />
                <View style={[invitationPageStyles.actionButton, invitationPageStyles.reject]} />
            </View>
        </View>
    );
}

export default InvitationPage;
