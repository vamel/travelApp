import {View} from "react-native";
import {createInvitationPageStyles} from "../styles/pages/createInvitationPageStyles";

interface ICreateInvitationPageProps {
    invitee: string;
}

const CreateInvitationPage = (props: ICreateInvitationPageProps) => {
    return(
        <View style={createInvitationPageStyles.container}>

        </View>
    );
}

export default CreateInvitationPage;
