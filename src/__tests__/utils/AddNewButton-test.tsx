import {render, screen} from "@testing-library/react-native";
import AddNewButton from "../../components/utils/AddNewButton";

describe("AddNewButton tests", () => {
    test("Should be rendered", () => {
       const button = render(
           <AddNewButton icon={"add"} text={"button"} onPress={() => {}} />);

       expect(screen.getByText("button")).toBeDefined();
    });
});