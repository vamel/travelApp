import {
    calculateAge,
    dateToString,
    dateToTime,
    getDateElements,
    getDayOrdinalSuffix,
    getTimeElements
} from "../../utils/dateUtils";
import moment from "moment";

describe("DateUtils tests", () => {
   test("Should return 1st", () => {
       const day = 1;
       expect(getDayOrdinalSuffix(day)).toBe("1st");
   });

    test("Should return 21st", () => {
        const day = 21;
        expect(getDayOrdinalSuffix(day)).toBe("21st");
    });

    test("Should return 31st", () => {
        const day = 31;
        expect(getDayOrdinalSuffix(day)).toBe("31st");
    });

    test("Should return 2nd", () => {
        const day = 2;
        expect(getDayOrdinalSuffix(day)).toBe("2nd");
    });

    test("Should return 22nd", () => {
        const day = 22;
        expect(getDayOrdinalSuffix(day)).toBe("22nd");
    });

    test("Should return 3rd", () => {
        const day = 3;
        expect(getDayOrdinalSuffix(day)).toBe("3rd");
    });

    test("Should return 23rd", () => {
        const day = 23;
        expect(getDayOrdinalSuffix(day)).toBe("23rd");
    });

    test("Should return th ordinals", () => {
        for (let day = 4; day < 21; day++) {
            expect(getDayOrdinalSuffix(day)).toBe(`${day}th`);
        }
        for (let day = 24; day < 31; day++) {
            expect(getDayOrdinalSuffix(day)).toBe(`${day}th`);
        }
    });

    test("Should return day, month and year", () => {
        const date = moment("2020-01-01");
        const [day, month, year] = getDateElements(date);
        expect(day).toBe(1);
        expect(month).toBe("Jan");
        expect(year).toBe(2020);
    });

    test("Should return date string", () => {
        const dateString = dateToString(1, "Jan", 2020);
        expect(dateString).toBe("Jan 1st 2020");
    });

    test("Should return hour and minute", () => {
        const date = moment("2020-01-01 20:35");
        const [hour, minute] = getTimeElements(date);
        expect(hour).toBe(20);
        expect(minute).toBe(35);
    });

    test("Should return time string", () => {
        const timeString = dateToTime(20, 35);
        expect(timeString).toBe("20:35");
    });

    test("Should return time string minutes below 10", () => {
        const timeString = dateToTime(20, 5);
        expect(timeString).toBe("20:05");
    });

    test("Should return time string hours below 10", () => {
        const timeString = dateToTime(9, 35);
        expect(timeString).toBe("09:35");
    });

    test("Should calculate age", () => {
        const birthdate = moment().add(-25, "year").toISOString();
        const age = calculateAge(birthdate);
        expect(age).toBe(25);
    });
});