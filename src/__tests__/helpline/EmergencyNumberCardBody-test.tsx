import {render, screen} from "@testing-library/react-native";
import EmergencyNumberCardBody from "../../components/helpline/EmergencyNumberCardBody";

describe("EmergencyNumberCardBody tests", () => {
    test("Should be rendered", () => {
        const body = render(
            <EmergencyNumberCardBody emojiCode={"0x1F691"} phoneNumber={"1"}/>);
        expect(screen.getByText("🚑")).toBeDefined();
        expect(screen.getByText("1")).toBeDefined();
    });
})