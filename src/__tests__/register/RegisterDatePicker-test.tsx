import {render, screen} from "@testing-library/react-native";
import RegisterDatePicker from "../../components/register/RegisterDatePicker";

describe("RegisterDatePicker tests", () => {
    test("Should be rendered without DateTimePicker", () => {
        const picker = render(
            <RegisterDatePicker
                onButtonPress={() => {}}
                isDatePickerOpen={false}
                userBirthdate={new Date("2000-01-01")}
                onUserBirthdateChange={() => {}}
            />);
        expect(screen.getByText("Pick date")).toBeDefined();
        expect(screen.getByPlaceholderText("01/01/2000")).toBeDefined();
    });
});