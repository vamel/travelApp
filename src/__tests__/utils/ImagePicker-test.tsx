import {render, screen} from "@testing-library/react-native";
import ImagePicker from "../../__mocks__/utils/ImagePicker";

describe("ImagePicker tests", () => {
    test("Should be rendered", () => {
        const picker = render(
            <ImagePicker onSelectImage={() => {}} buttonText={"Select avatar"}/>);
        expect(screen.getByText("Select avatar")).toBeDefined();
    });
});