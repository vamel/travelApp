import {fireEvent, render, screen} from "@testing-library/react-native";
import LoginInput from "../../components/login/LoginInput";

describe('LoginInput tests', () => {
    test("Should be rendered", () => {
        const input = render(
            <LoginInput placeholder={"input"} onTextChange={() => {}} value={""} />);

        expect(screen.getByPlaceholderText("input")).toBeDefined();
    });

    test("Should be rendered", () => {
       let text = "";
       const onEventMock = jest.fn((val) => {text = val});

       const input = render(
           <LoginInput placeholder={"input"} onTextChange={onEventMock} value={text} />);

       fireEvent(screen.getByPlaceholderText("input"), "onChangeText", "text entered");
       expect(text).toBe("text entered");
    });
});