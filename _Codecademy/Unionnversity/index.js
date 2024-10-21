"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const courses_1 = require("./courses");
const studyGroups_1 = require("./studyGroups");
function searchEvents(options) {
    let events = options.eventType === "course" ? courses_1.default : studyGroups_1.default;
    return events.filter((event) => {
        if (typeof options.query === "number") {
            return options.query === event.id;
        }
        else if (typeof options.query === "string") {
            return event.keywords.includes(options.query);
        }
    });
}
let enrolledEvents = [];
function enroll(event) {
    enrolledEvents.push(event);
}
let searchResults = searchEvents({ query: "art", eventType: "course" });
enroll(searchResults[1]);
console.log(searchResults);
console.log(enrolledEvents);
