import OtherUserDashboard from "../../__mocks__/usersnearby/OtherUserDashboard";
import {render, screen} from "@testing-library/react-native";

describe("OtherUserDashboard tests", () => {
    test("Should be rendered", () => {
        const dashboard = render(
            <OtherUserDashboard pictureUrl={""} uid={""} username={""}/>);
        expect(screen.getByText("Invite user")).toBeDefined();
    });

    test("Should render username", () => {
        const dashboard = render(
            <OtherUserDashboard pictureUrl={""} uid={"2"} username={"OtherUser"}/>);
        expect(screen.getByText("OtherUser")).toBeDefined();
    });
});