import {render, screen} from "@testing-library/react-native";
import React from "react";
import IconButton from "../../components/icons/IconButton";

describe("IconButton tests", () => {
    test("Should be rendered", () => {
        const button = render(<IconButton  color={"red"} icon={"icon"} onPress={() => {}}/>);
        expect(button).toBeDefined();
    });
});