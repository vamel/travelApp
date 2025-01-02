import {fireEvent, render, screen} from "@testing-library/react-native";
import RegisterItemList from "../../components/register/RegisterItemList";

describe("RegisterItemList tests", () => {
    test("Should be rendered", () => {
        const list = render(
            <RegisterItemList items={[]} title={"items"} onChoice={() => {}} />);
        expect(screen.getByText("items")).toBeDefined();
    });

    test("Should add an item after press", () => {
        const itemList: string[] = [];
        const onEventMock = jest.fn((value) => itemList.push(value));

        const list = render(
            <RegisterItemList items={["item1", "item2", "item3"]} title={"items"} onChoice={onEventMock} />);

        fireEvent(screen.getByText("Item1"), "onPress");
        expect(itemList).toHaveLength(1);
        expect(itemList[0]).toBe("item1");
    });
});