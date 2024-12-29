import {render, screen} from "@testing-library/react-native";
import Map from "../../components/utils/Map";
import {Coords} from "../../models/classes/Coords";
import React from "react";

describe("Map tests", () => {
   const coords: Coords = {
       lat: "30",
       lon: "20"
   };

    beforeEach(() => {
        jest.spyOn(React, "useEffect").mockImplementationOnce(() => {});
    });

   test("Should be rendered", () => {
       const map = render(<Map coordinates={coords}/>);
       expect(screen.getByText("Location:")).toBeDefined();
   });
});