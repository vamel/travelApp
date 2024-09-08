import {View, Text, ScrollView} from "react-native";
import {invitationPageStyles} from "../styles/pages/invitationPageStyles";
import {useContext} from "react";
import {AuthContext} from "../store/user/auth-context";
import ProfileButton from "../components/userprofile/ProfileButton";
import Map from "../components/utils/Map";
import {parseCoords} from "../firebase/parseAttractionData";
import {dateToString, dateToTime, getDateElements, getTimeElements} from "../utils/dateUtils";
import {doc, updateDoc} from "firebase/firestore";
import {InvitationDTO} from "../models/classes/InvitationDTO";
import {db} from "../firebase/config";
import {InvitationStatus} from "../models/enums/InvitationStatus";
import {useNavigation} from "@react-navigation/native";
import HelplineButton from "../components/helpline/HelplineButton";

const InvitationPage = ({route}) => {
    const invitationData: InvitationDTO = route.params.invitation;
    const authCtx = useContext(AuthContext);
    const navigation = useNavigation();

    const acceptButtonHandler = async () => {
        const invitationRef = doc(db, "invitations", invitationData.uid);
        //@ts-ignore
        await updateDoc(invitationRef, {
            status: InvitationStatus.ACCEPTED
        }).then(() => authCtx.getData(authCtx.uid)).then(() => navigation.navigate("InvitationListPage"));
    }

    const rejectButtonHandler = async () => {
        const invitationRef = doc(db, "invitations", invitationData.uid);
        //@ts-ignore
        await updateDoc(invitationRef, {
            status: InvitationStatus.REJECTED
        }).then(() => authCtx.getData(authCtx.uid)).then(() => navigation.navigate("InvitationListPage"));
    }

    return(
        <View style={invitationPageStyles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{flex: 1, justifyContent: 'center', alignItems: "center"}}
            >
                <Text style={invitationPageStyles.title}>{invitationData.inviterName}'s invitation</Text>
                <View style={invitationPageStyles.invitationInfoContainer}>
                    <Text style={invitationPageStyles.fieldTitle}>Date:</Text>
                    <Text style={invitationPageStyles.fieldValue}>
                        {`${dateToString(...getDateElements(invitationData.date))}`}
                    </Text>
                    <Text style={invitationPageStyles.fieldTitle}>Time:</Text>
                    <Text style={invitationPageStyles.fieldValue}>
                        {`${dateToTime(...getTimeElements(invitationData.date))}`}
                    </Text>
                    <Text style={invitationPageStyles.fieldTitle}>Message:</Text>
                    <Text style={invitationPageStyles.fieldValue}>{invitationData.message}</Text>
                </View>
                <Map coordinates={parseCoords(invitationData.location)} />
                {authCtx.uid === invitationData.inviteeUid && invitationData.status == InvitationStatus.PENDING &&
                <View style={invitationPageStyles.actionsContainer}>
                    <ProfileButton
                        icon={"checkmark-circle"}
                        color={"green"}
                        text={"Accept"}
                        onPress={acceptButtonHandler}
                    />
                    <ProfileButton
                        icon={"close-circle"}
                        color={"red"}
                        text={"Reject"}
                        onPress={rejectButtonHandler}
                    />
                </View>}
                <HelplineButton />
            </ScrollView>
        </View>
    );
}

export default InvitationPage;
