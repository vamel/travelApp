import RegisterInput from "../../components/register/RegisterInput";
import {fireEvent, render, screen} from "@testing-library/react-native";

describe("RegisterInput tests", () => {
   test("Should be rendered", () => {
       const input = render(
           <RegisterInput placeholder={"input"} onTextChange={() => {}} value={""} secure={false} />);
       expect(screen.getByPlaceholderText("input")).toBeDefined();
   });

   test("Should change value on text change", () => {
       const onEventMock = jest.fn((value) => value + " entered");

       const input = render(
           <RegisterInput placeholder={"input"} onTextChange={onEventMock} value={""} secure={false} />);
       fireEvent(screen.getByPlaceholderText("input"), "onChangeText", "text");
       expect(onEventMock).toHaveBeenCalledWith("text");
       expect(onEventMock).toHaveReturnedWith("text entered");
   });
});