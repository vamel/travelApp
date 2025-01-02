import {render, screen} from "@testing-library/react-native";
import ProfilePictureImagePicker from "../../__mocks__/register/ProfilePictureImagePicker";

describe("ProfilePictureImagePicker tests", () => {
    test("Should be rendered", () => {
        const picker = render(
            <ProfilePictureImagePicker  onSelectImage={() => {}}/>);
        expect(screen.getByText("Select avatar")).toBeDefined();
    });
});