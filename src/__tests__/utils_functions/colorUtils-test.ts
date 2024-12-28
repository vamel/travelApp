import {getColorValue} from "../../utils/colorUtils";

describe('Color hex codes', () => {

    test('Orange hex code is returned after giving its name', () => {
        expect(getColorValue("orange")).toBe("#E3885F");
    });

    test('Purple hex code is returned after giving its name', () => {
        expect(getColorValue("purple")).toBe("#A763EB");
    });

    test('Gray hex code is returned after giving its name', () => {
        expect(getColorValue("gray")).toBe("#DBE0E1");
    });

    test('Red hex code is returned after giving its name', () => {
        expect(getColorValue("red")).toBe("#C70428");
    });

    test('Green hex code is returned after giving its name', () => {
        expect(getColorValue("green")).toBe("#07A82B");
    });
});