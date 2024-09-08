import {Invitation} from "../models/classes/Invitation";
import {collection, addDoc, doc, updateDoc, arrayUnion} from "firebase/firestore";
import {db} from "./config";

export const putInvitation = async (invitationData: Invitation) => {
    const sentData = {
        date: invitationData.date,
        inviteeUid: invitationData.inviteeUid,
        inviteeName: invitationData.inviteeName,
        inviteePictureUrl: invitationData.inviteePictureUrl ? invitationData.inviteePictureUrl : "",
        inviterUid: invitationData.inviterUid,
        inviterName: invitationData.inviterName,
        inviterPictureUrl: invitationData.inviterPictureUrl ? invitationData.inviterPictureUrl : "",
        location: {
            lat: invitationData.location.lat,
            lon: invitationData.location.lon
        },
        message: invitationData.message,
        status: invitationData.status
    }
    const invitationRef = await addDoc(collection(db, "invitations"), sentData);

    const inviteeRef = doc(db, "users", invitationData.inviteeUid);
    await updateDoc(inviteeRef, {
        invitations_received: arrayUnion(invitationRef.id)
    });

    const inviterRef = doc(db, "users", invitationData.inviterUid);
    await updateDoc(inviterRef, {
        invitations_sent: arrayUnion(invitationRef.id)
    });
}
