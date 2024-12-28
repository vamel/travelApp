import {toTitle} from "../../utils/stringUtils";

describe('StringUtils tests', () => {
    test("Should make title case from lowercase", () => {
       const title = toTitle("word");
       expect(title).toBe("Word");
    });

    test("Should make title case from randomcase", () => {
        const title = toTitle("rAnDomCAsE");
        expect(title).toBe("Randomcase");
    });

    test("Should make title case in each word", () => {
        const title = toTitle("lorem ipsum dolor sit amet");
        expect(title).toBe("Lorem Ipsum Dolor Sit Amet");
    });
});