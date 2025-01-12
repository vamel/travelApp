import {fireEvent, render, screen} from "@testing-library/react-native";
import IsAccessibleSwitch from "../../components/attraction/IsAccessibleSwitch";

describe("IsAccessibleSwitch tests", () => {
   test("Should be rendered", () => {
      let isValid: boolean = false;

      const accessibleSwitch = render(<IsAccessibleSwitch
          title={"Is this question valid?"}
          onSwitch={() => {}}
          value={isValid} />
      );

      expect(isValid).toBe(false);
      expect(screen.getByText("Is this question valid?")).toBeDefined();
   });
});