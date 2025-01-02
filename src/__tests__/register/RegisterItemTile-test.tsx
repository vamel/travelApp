import RegisterItemTile from "../../components/register/RegisterItemTile";
import {render, screen} from "@testing-library/react-native";

describe("RegisterItemTile tests", () => {
    test("Should be rendered", () => {
        const tile = render(
            <RegisterItemTile  itemText={"item1"} onPress={() => {}}/>);

        expect(screen.getByText("Item1")).toBeDefined();
    });
});