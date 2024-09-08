import {SafeAreaView, ScrollView, Text} from "react-native";
import {invitationListPageStyles} from "../styles/pages/invitationListPageStyles";
import HelplineButton from "../components/helpline/HelplineButton";
import {useContext, useEffect, useState} from "react";
import {collection, documentId, getDocs, orderBy, query, where} from "firebase/firestore";
import {db} from "../firebase/config";
import {AuthContext} from "../store/user/auth-context";
import {UserDTO} from "../models/classes/UserDTO";
import {Coords} from "../models/classes/Coords";
import InvitationReceivedItem from "../components/invitations/InvitationReceivedItem";
import InvitationSentItem from "../components/invitations/InvitationSentItem";
import {InvitationDTO} from "../models/classes/InvitationDTO";

const InvitationListPage = () => {
    const [invitationsSent, setInvitationsSent] = useState([]);
    const [invitationsReceived, setInvitationsReceived] = useState([]);
    const authCtx = useContext(AuthContext);
    const currentUser: UserDTO = authCtx.user!;

    useEffect(() => {
        const invRef = collection(db, "invitations");
        const getInvitationsReceived = async () => {
            const q = query(invRef, where(documentId(), "in", currentUser.invitations_received),
                orderBy(documentId()));
            const querySnapshot = await getDocs(q);
            const receivedInvitations = querySnapshot.docs.map((doc) => {
                const data = doc.data();
                return new InvitationDTO(doc.id, data.inviteeUid, data.inviteeName, data.inviteePictureUrl,
                    data.inviterUid, data.inviterName, data.inviterPictureUrl,
                    new Coords(data.location.lat, data.location.lon), data.date, data.message, data.status);
            });
            setInvitationsReceived(receivedInvitations);
        }

        const getInvitationsSent = async () => {
            const q = query(invRef, where(documentId(), "in", currentUser.invitations_sent),
                orderBy(documentId()));
            const querySnapshot = await getDocs(q);
            const sentInvitations = querySnapshot.docs.map((doc) => {
                const data = doc.data();
                return new InvitationDTO(doc.id, data.inviteeUid, data.inviteeName, data.inviteePictureUrl,
                    data.inviterUid, data.inviterName, data.inviterPictureUrl,
                    new Coords(data.location.lat, data.location.lon), data.date, data.message, data.status);
            });
            setInvitationsSent(sentInvitations);
        }

        getInvitationsReceived();
        getInvitationsSent();
    }, [currentUser.invitations_sent, currentUser.invitations_received]);

    return(
        <SafeAreaView style={invitationListPageStyles.container}>
            <ScrollView>
                <Text style={invitationListPageStyles.title}>Your invitations</Text>
                <HelplineButton />
                <Text style={invitationListPageStyles.subtitle}>Invitations received</Text>
                {invitationsReceived.map((invitation: InvitationDTO) => {
                    return <InvitationReceivedItem invitation={invitation} key={invitation.inviteeUid+invitation.inviterUid} />
                })}
                <Text style={invitationListPageStyles.subtitle}>Invitations sent</Text>
                {invitationsSent.map((invitation: InvitationDTO) => {
                    return <InvitationSentItem invitation={invitation} key={invitation.inviteeUid+invitation.inviterUid} />
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

export default InvitationListPage;
