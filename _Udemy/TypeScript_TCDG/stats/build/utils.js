"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
/**
 * Converts a date string in the format 'dd/mm/yyyy' to a Date object.
 *
 * @param dateString - The date string to be converted, formatted as 'dd/mm/yyyy'.
 * @returns A Date object representing the given date string.
 */
const dateStringToDate = (dateString) => {
    // * from -> '22/01/2024'
    const dateParts = dateString
        .split("/") // ['22', '1', '2024']
        .map((value) => {
        return parseInt(value); // [22, 1, 2024]
    });
    // ? new Date(year, month(starts at 0), day)
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
exports.dateStringToDate = dateStringToDate;
