import {fireEvent, render, screen} from "@testing-library/react-native";
import EditProfileItemTitle from "../../components/editprofile/EditProfileItemTitle";

describe("EditProfileItemTitle tests", () => {
    let useritems = ["item1"];

    const onItemChoice = (itemChosen: string) => {
        if (useritems.includes(itemChosen)) {
            useritems = [...useritems.filter((item) => item !== itemChosen)];
        } else {
            useritems = [...useritems, itemChosen];
        }
    }

    test("Should be rendered", () => {
        const profileItemTile =
            render(<EditProfileItemTitle itemText={"Tile"} selected={useritems.includes("Tile")} onPress={onItemChoice}/>);
        expect(profileItemTile).toBeDefined();
        expect(useritems.includes("Tile")).toBe(false);
    });

    test("Should change useritems and add Tile", () => {
        const profileItemTile =
            render(<EditProfileItemTitle itemText={"Tile"} selected={useritems.includes("Tile")} onPress={onItemChoice}/>);
        fireEvent(screen.getByText("Tile"), "onPress", "Tile");
        expect(useritems.includes("Tile")).toBe(true);
    });

    test("Should change useritems and remove Tile", () => {
        useritems = ["item1", "Tile"];
        const profileItemTile =
            render(<EditProfileItemTitle itemText={"Tile"} selected={useritems.includes("Tile")} onPress={onItemChoice}/>);
        fireEvent(screen.getByText("Tile"), "onPress", "Tile");
        expect(useritems.includes("Tile")).toBe(false);
    });
});