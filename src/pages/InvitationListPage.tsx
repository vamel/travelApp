import {SafeAreaView, ScrollView, Text} from "react-native";
import InvitationItem from "../components/invitations/InvitationItem";
import {invitationListPageStyles} from "../styles/pages/invitationListPageStyles";
import HelplineButton from "../components/helpline/HelplineButton";

const DUMMY_INVITATIONS = [
    {
        name: "User 1",
        location: "somewhere"
    },
    {
        name: "User 2",
        location: "someplace"
    },
    {
        name: "User 3",
        location: "anywhere"
    }
]

const InvitationListPage = () => {
    return(
        <SafeAreaView style={invitationListPageStyles.container}>
            <ScrollView>
                <Text style={invitationListPageStyles.title}>Your invitations</Text>
                <HelplineButton />
                {DUMMY_INVITATIONS.map((invitation) => {
                    return <InvitationItem name={invitation.name} location={invitation.location} key={invitation.name} />
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default InvitationListPage;
