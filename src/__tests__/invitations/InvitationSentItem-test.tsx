import {render, screen} from "@testing-library/react-native";
import InvitationSentItem from "../../__mocks__/invitations/InvitationSentItem";
import {InvitationDTO} from "../../models/classes/InvitationDTO";
import {InvitationStatus} from "../../models/enums/InvitationStatus";
import React from "react";

describe("InvitationSentItem tests", () => {
    const invitationData: InvitationDTO = {
        date: new Date("2000-01-01"),
        inviteeName: "user2",
        inviteePictureUrl: "",
        inviteeUid: "2",
        inviterName: "user1",
        inviterPictureUrl: "",
        inviterUid: "1",
        location: {
            lat: "20",
            lon: "20"
        },
        message: "Hello",
        status: InvitationStatus.PENDING,
        uid: "1"

    };

    test("Should show invitation status data", () => {
        const item = render(
            <InvitationSentItem invitation={invitationData}/>);

        expect(screen.getByText("Status: pending")).toBeDefined();
    });

    test("Should show invitee's username", () => {
        const item = render(
            <InvitationSentItem invitation={invitationData}/>);

        expect(screen.getByText("You invited user2")).toBeDefined();
    });
});