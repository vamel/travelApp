import {fireEvent, render, screen} from "@testing-library/react-native";
import EmergencyNumberCard from "../../__mocks__/helpline/EmergencyNumberCard";

describe("EmergencyNumberCard tests", () => {
    const numberData = {
        countryName: "XYZ",
        ambulance: "1",
        fire: "2",
        police: "3"
    };

    test("Should be rendered", () => {
        const card = render(
            <EmergencyNumberCard countryCode={"GB"} data={numberData} size={2}/>);
        screen.getByText("XYZ");
    });

    test("Should not render emergency numbers before expanding", () => {
        const card = render(
            <EmergencyNumberCard countryCode={"GB"} data={numberData} size={2}/>);
        expect(screen.queryAllByText("1")).toHaveLength(0);
        expect(screen.queryAllByText("2")).toHaveLength(0);
        expect(screen.queryAllByText("3")).toHaveLength(0);
    })

    test("Should render ambulance number after expanding", () => {
        const card = render(
            <EmergencyNumberCard countryCode={"GB"} data={numberData} size={2}/>);
        fireEvent(screen.getByText("Icon mocked"), "onPress");
        screen.getByText("1");
    });

    test("Should render fire department number after expanding", () => {
        const card = render(
            <EmergencyNumberCard countryCode={"GB"} data={numberData} size={2}/>);
        fireEvent(screen.getByText("Icon mocked"), "onPress");
        screen.getByText("2");
    });

    test("Should render police number after expanding", () => {
        const card = render(
            <EmergencyNumberCard countryCode={"GB"} data={numberData} size={2}/>);
        fireEvent(screen.getByText("Icon mocked"), "onPress");
        screen.getByText("3");
    });
});