import {InvitationDTO} from "../../models/classes/InvitationDTO";
import {InvitationStatus} from "../../models/enums/InvitationStatus";
import {render, screen} from "@testing-library/react-native";
import InvitationReceivedItem from "../../__mocks__/invitations/InvitationReceivedItem";
import React from "react";

describe("InvitationReceivedItem tests", () => {
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

    test("Should be rendered" ,() => {
        const item = render(
            <InvitationReceivedItem invitation={invitationData}/>);

        expect(screen.getByText("Status: pending")).toBeDefined();
    });

    test("Should show inviter's username", () => {
        const item = render(
            <InvitationReceivedItem invitation={invitationData}/>);

        expect(screen.getByText("user1's invitation")).toBeDefined();
    });
});