import {render, screen} from "@testing-library/react-native";
import LoginButton from "../../components/login/LoginButton";

describe('LoginButton tests', () => {
    test("Should be rendered", () => {
        const button = render(
            <LoginButton title={"title"} backgroundColor={"orange"} textColor={"white"} onPress={() => {}} />);

        expect(screen.getByText("title")).toBeDefined();
    });
});