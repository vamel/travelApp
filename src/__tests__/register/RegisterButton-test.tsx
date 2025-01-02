import {render, screen} from "@testing-library/react-native";
import RegisterButton from "../../components/register/RegisterButton";

describe("RegisterButton tests", () => {
   test("Should be rendered", () => {
       const button = render(<RegisterButton title={"button"} onPress={() => {}} />);
       expect(screen.getByText("button")).toBeDefined();
   });
});