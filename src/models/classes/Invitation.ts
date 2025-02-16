import {InvitationStatus} from "../enums/InvitationStatus";
import {Coords} from "./Coords";

export class Invitation {
    constructor(inviteeUid: string, inviteeName: string, inviteePictureUrl: string, inviterUid: string, inviterName: string,
                inviterPictureUrl: string, location: Coords, date: Date, message: string, status: InvitationStatus) {
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
