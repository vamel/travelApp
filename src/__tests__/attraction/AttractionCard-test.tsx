import { render, screen } from "@testing-library/react-native";
import AttractionCard from "../../components/attraction/AttractionCard";
import React from "react";

describe('AttractionCard tests', () => {
    beforeEach(() => {
        jest.spyOn(React, "useEffect").mockImplementationOnce(() => {});
    });

    test('Should render AttractionCard', () => {
        const attractionCard = render(<AttractionCard imageUrl={"image.png"} name={"Attraction"} />);
        expect(attractionCard).toBeDefined();
        screen.getByText("Attraction");
    });
});