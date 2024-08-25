export const getDayOrdinalSuffix = (day) => {
    switch (day) {
        case [1, 21, 31].includes(day):
            return day + 'st'
        case [2, 22].includes(day):
            return day + 'nd'
        case [3, 23].includes(day):
            return day + 'rd'
        default:
            return day + 'th'
    }
}

export const getDateElements = (date) => {
    const displayDate = date.toDate();
    const day = displayDate.getDay();
    const month = displayDate.toLocaleDateString("en-GB", {month: "short"});
    const year = displayDate.getFullYear();

    return [day, month, year];
}

export const dateToString = (day, month, year) => {
    return `${month} ${getDayOrdinalSuffix(day)} ${year}`;
}
