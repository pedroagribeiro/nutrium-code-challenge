import moment from "moment";

export const dateToCalendarDate = (date: Date) => {
    return moment(date).format("do MMMM YYYY");
}

export const dateToClockTime = (date: Date) => {
    return moment(date).format("h:mm a");
}