import {fireEvent, render, screen} from "@testing-library/react-native";
import CreateProfileInput from "../../components/register/CreateProfileInput";

describe("CreateProfileInput tests", () => {
   test("Should be rendered", () => {
      const input = render(
          <CreateProfileInput
              title={"input"}
              placeholder={"text"}
              maxLength={20}
              keyboardType={"default"}
              onChangeText={() => {}}
          />);
      expect(screen.getByText("input")).toBeDefined();
      expect(screen.getByPlaceholderText("text")).toBeDefined();
   });

   test("Should fire event on text change", () => {
       const onEventMock = jest.fn((value) => value);

       const input = render(
           <CreateProfileInput
               title={"input"}
               placeholder={"text"}
               maxLength={20}
               keyboardType={"default"}
               onChangeText={onEventMock}
           />);
       fireEvent(screen.getByPlaceholderText("text"), "onChangeText", "input text");
       expect(onEventMock).toHaveBeenCalledWith("input text");
   });

    test("Should change text", () => {
        const onEventMock = jest.fn((value) => value + " entered");

        const input = render(
            <CreateProfileInput
                title={"input"}
                placeholder={"text"}
                maxLength={20}
                keyboardType={"default"}
                onChangeText={onEventMock}
            />);
        fireEvent(screen.getByPlaceholderText("text"), "onChangeText", "text");
        expect(onEventMock).toHaveBeenCalledWith("text");
        expect(onEventMock).toHaveReturnedWith("text entered");
    });
});