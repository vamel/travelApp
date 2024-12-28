import {fireEvent, render, screen} from "@testing-library/react-native";
import EditProfileItemList from "../../components/editprofile/EditProfileItemList";

describe("EditProfileItemList tests", () => {
   const ITEMS = ["item1", "item2", "item3"];
   let useritems = ["item1"];

   const onItemChoice = (itemChosen: string) => {
       if (useritems.includes(itemChosen)) {
           useritems = [...useritems.filter((item) => item !== itemChosen)];
       } else {
           useritems = [...useritems, itemChosen];
       }
   }

   test("Should be rendered", () => {
       useritems = ["item1"];
       const profileItemList = render(
           <EditProfileItemList items={ITEMS} title={"Your items"} value={useritems} onChoice={onItemChoice} />);
       expect(profileItemList).toBeDefined();
       screen.getByText("Your items");
       expect(useritems.includes("item1")).toBe(true);
       expect(useritems.includes("item2")).toBe(false);
       expect(useritems.includes("item3")).toBe(false);
   });

   test("Should add item", () => {
       useritems = ["item1"];
       const profileItemList = render(
           <EditProfileItemList items={ITEMS} title={"Your items"} value={useritems} onChoice={onItemChoice} />);
       fireEvent(screen.getByText("Item2"), 'onPress', 'item2');
       expect(useritems.includes("item1")).toBe(true);
       expect(useritems.includes("item2")).toBe(true);
       expect(useritems.includes("item3")).toBe(false);
   });

    test("Should remove item", () => {
        useritems = ["item1"];
        const profileItemList = render(
            <EditProfileItemList items={ITEMS} title={"Your items"} value={useritems} onChoice={onItemChoice} />);
        fireEvent(screen.getByText("Item1"), 'onPress', 'item1');
        expect(useritems.includes("item1")).toBe(false);
        expect(useritems.includes("item2")).toBe(false);
        expect(useritems.includes("item3")).toBe(false);
    });
});