import {fireEvent, render} from "@testing-library/react-native";
import {screen} from "@testing-library/react-native";
import SearchBar from "../../components/utils/SearchBar";

describe("SearchBar tests", () => {
    jest.mock("@expo/vector-icons", () =>  1);

    test('Should be rendered', () => {
        const input = render(<SearchBar onChangeText={() => {}} onPress={() => {}} placeholderText={"Enter city name"} width={230}/>);
        screen.getByPlaceholderText("Enter city name");
    });

    test('Should change text on user input', () => {
        const onEventMock = jest.fn();
        const input = render(<SearchBar onChangeText={onEventMock} onPress={() => {}} placeholderText={"Enter city name"} width={230}/>);
        fireEvent(screen.getByPlaceholderText("Enter city name"), "onChangeText", "warsaw");
        expect(onEventMock).toHaveBeenCalledWith("warsaw");
    });

    test('Should show new text on the screen', () => {
        const onEventMock = jest.fn(() => 'warsaw');
        const input = render(<SearchBar onChangeText={onEventMock} onPress={() => {}} placeholderText={"Enter city name"} width={230}/>);
        fireEvent(screen.getByPlaceholderText("Enter city name"), "onChangeText", "warsaw");

        screen.findByText("warsaw");
    });
})