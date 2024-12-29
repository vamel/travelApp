import React from "react";
import UserCard from "../../components/usersnearby/UserCard";
import {render, screen} from "@testing-library/react-native";

describe("UserCard tests", () => {
    beforeEach(() => {
        jest.spyOn(React, "useEffect").mockImplementationOnce(() => {});
    });

   test("Should be rendered", () => {
       const card = render(<UserCard imageUrl={""} username={"Test"}/>);
       expect(screen.getByText("Test")).toBeDefined();
   });
});