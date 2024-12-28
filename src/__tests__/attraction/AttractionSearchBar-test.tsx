import {fireEvent, render} from "@testing-library/react-native";
import {screen} from "@testing-library/react-native";
import AttractionSearchBar from "../../components/attraction/AttractionSearchBar";

describe('AttractionSearchBar tests', () => {
    jest.mock('@expo/vector-icons', () =>  1);

    test('Should be rendered', () => {
        const input = render(<AttractionSearchBar onChangeText={() => {}} onPress={() => {}}/>);
        screen.getByPlaceholderText('Enter city name');
    });

    test('Should change text on user input', () => {
        const onEventMock = jest.fn();
        const input = render(<AttractionSearchBar onChangeText={onEventMock} onPress={() => {}}/>);
        fireEvent(screen.getByPlaceholderText('Enter city name'), 'onChangeText', 'warsaw');
        expect(onEventMock).toHaveBeenCalledWith('warsaw');
    });

    test('Should show new text on the screen', () => {
        const onEventMock = jest.fn(() => 'warsaw');
        const input = render(<AttractionSearchBar onChangeText={onEventMock} onPress={() => {}}/>);
        fireEvent(screen.getByPlaceholderText('Enter city name'), 'onChangeText', 'warsaw');
        screen.findByText('warsaw');
    });
})