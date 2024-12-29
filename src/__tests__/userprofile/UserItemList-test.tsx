import {render, screen} from "@testing-library/react-native";
import UserItemList from "../../components/userprofile/UserItemList";

describe("UserItemList tests", () => {
   test("Should be rendered", () => {
       const itemList = render(<UserItemList items={[]} title={"Item list"} />);
       expect(screen.getByText("Item list")).toBeDefined();
   });

   test("Should render items in a list", () => {
       const list = ["item1", "item2", "item3"];
       const itemList = render(<UserItemList items={list} title={"Item list"} />);
       expect(screen.getByText("Item1")).toBeDefined();
       expect(screen.getByText("Item2")).toBeDefined();
       expect(screen.getByText("Item3")).toBeDefined();
   });
});