import {fireEvent, render, screen} from "@testing-library/react-native";
import InvitationDatePicker from "../../components/invitations/InvitationDatePicker";

describe("InvitationDatePicker tests", () => {
    test("Should be rendered", () => {
        const picker = render(
            <InvitationDatePicker
                onDateButtonPress={() => {}}
                onTimeButtonPress={() => {}}
                isDatePickerOpen={false}
                isTimePickerOpen={false}
                invitationDate={new Date("2000-01-01")}
                onInvitationDateChange={() => {}}
                onInvitationTimeChange={() => {}} />);

        expect(screen.getByText("Select date")).toBeDefined();
    });

    test("Should show time picker", () => {
        let isTimePickerShown = false;
        const onEventMock = jest.fn(() => {isTimePickerShown = !isTimePickerShown})
        const picker = render(
            <InvitationDatePicker
                onDateButtonPress={() => {}}
                onTimeButtonPress={onEventMock}
                isDatePickerOpen={false}
                isTimePickerOpen={isTimePickerShown}
                invitationDate={new Date("2000-01-01")}
                onInvitationDateChange={() => {}}
                onInvitationTimeChange={() => {}} />);

        fireEvent(screen.getByText("Pick time"), "onPress");
        expect(isTimePickerShown).toBe(true);
    });

    test("Should show date picker", () => {
        let isDatePickerShown = false;
        const onEventMock = jest.fn(() => {isDatePickerShown = !isDatePickerShown})
        const picker = render(
            <InvitationDatePicker
                onDateButtonPress={onEventMock}
                onTimeButtonPress={() => {}}
                isDatePickerOpen={isDatePickerShown}
                isTimePickerOpen={false}
                invitationDate={new Date("2000-01-01")}
                onInvitationDateChange={() => {}}
                onInvitationTimeChange={() => {}} />);

        fireEvent(screen.getByText("Pick date"), "onPress");
        expect(isDatePickerShown).toBe(true);
    });
});