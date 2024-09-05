import {InvitationStatus} from "../enums/InvitationStatus";

export class Invitation {
    constructor(invitee: string, inviter: string, location: string,
                date: string, time: string, status: InvitationStatus) {
        this.invitee = invitee;
        this.inviter = inviter;
        this.location = location;
        this.date = date;
        this.time = time;
        this.status = status;
    }

    invitee: string;
    inviter: string;
    location: string;
    date: string;
    time: string;
    status: InvitationStatus
}
