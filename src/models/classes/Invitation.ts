import {InvitationStatus} from "../enums/InvitationStatus";
import {Coords} from "./Coords";

export class Invitation {
    constructor(invitee: string, inviter: string, location: Coords,
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
    location: Coords;
    date: string;
    time: string;
    status: InvitationStatus
}
