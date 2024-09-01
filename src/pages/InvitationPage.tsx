import {View} from "react-native";
import {invitationPageStyles} from "../styles/pages/invitationPageStyles";

const InvitationPage = () => {
    return(
        <View>
            <View style={invitationPageStyles.actionsContainer}>
                <View style={[invitationPageStyles.actionButton ,invitationPageStyles.accept]} />
                <View style={[invitationPageStyles.actionButton, invitationPageStyles.reject]} />
            </View>
        </View>
    );
}

export default InvitationPage;
