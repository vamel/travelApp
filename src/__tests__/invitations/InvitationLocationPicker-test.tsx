import {render, screen} from "@testing-library/react-native";
import InvitationLocationPicker from "../../__mocks__/invitations/InvitationLocationPicker";

describe("InvitationLocationPicker tests", () => {
   test("Should be rendered", () => {
       const picker = render(<InvitationLocationPicker />);

       expect(screen.getByText("Pick location"));
   });
});