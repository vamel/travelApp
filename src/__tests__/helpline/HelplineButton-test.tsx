import 'react-native-gesture-handler/jestSetup';
import {render, screen} from "@testing-library/react-native";
import HelplineButton from "../../components/helpline/HelplineButton";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";

describe("HelplineButton tests", () => {
    test("Should be rendered", () => {
        const button = render(
            <NavigationContainer>
                <HelplineButton />
            </NavigationContainer>);
        expect(screen.getByText("Go Back")).toBeDefined();
    });
});