import {render, screen} from "@testing-library/react-native";
import ProfileButton from "../../components/userprofile/ProfileButton";

describe("ProfileButton tests", () => {
   test("Should be rendered", () => {
       const button = render(
       <ProfileButton icon={"icon"} color={"orange"} text={"profile icon"} onPress={() => {}} />);
       expect(screen.getByText("profile icon")).toBeDefined();
   });
});