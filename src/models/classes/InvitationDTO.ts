import {Coords} from "./Coords";
import {InvitationStatus} from "../enums/InvitationStatus";

export class InvitationDTO {
    constructor(uid: string, inviteeUid: string, inviteeName: string,
                inviteePictureUrl: string, inviterUid: string, inviterName: string,
                inviterPictureUrl: string, location: Coords, date: Date,
                message: string, status: InvitationStatus) {
        this.uid = uid;
        this.inviteeUid = inviteeUid;
        this.inviteeName = inviteeName;
        this.inviteePictureUrl = inviteePictureUrl;
        this.inviterUid = inviterUid;
        this.inviterName = inviterName;
        this.inviterPictureUrl = inviterPictureUrl;
        this.location = location;
        this.date = date;
        this.message = message;
        this.status = status;
    }
    uid: string;
    inviteeUid: string;
    inviteeName: string;
    inviteePictureUrl: string;
    inviterUid: string;
    inviterName: string;
    inviterPictureUrl: string;
    location: Coords;
    date: Date;
    message: string;
    status: InvitationStatus
}
