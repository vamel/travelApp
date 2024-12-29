import {render, screen} from "@testing-library/react-native";
import ItemTile from "../../components/icons/ItemTile";

describe("ItemTile tests", () => {
   test("Should be rendered", () => {
       const tile = render(<ItemTile itemText={"item"} />);
       expect(screen.getByText("Item")).toBeDefined();
   });
});