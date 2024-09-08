import moment from "moment";

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
    const day = displayDate.getDate();
    const month = displayDate.toLocaleDateString("en-GB", {month: "short"});
    const year = displayDate.getFullYear();

    return [day, month, year];
}

export const getTimeElements = (date) => {
    const displayDate = date.toDate();
    const hour = displayDate.getHours();
    const minutes = displayDate.getMinutes();

    return [hour, minutes];
}

export const dateToString = (day, month, year) => {
    return `${month} ${getDayOrdinalSuffix(day)} ${year}`;
}

export const dateToTime = (hour, minutes) => {
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return `${hour}:${minutes}`;
}

export const calculateAge = (birthdate: string) => {
    return moment().diff(new Date(birthdate), 'years');
}
