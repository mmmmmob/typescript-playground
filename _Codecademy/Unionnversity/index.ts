import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type SearchEventOptions = {
  query: string | number;
  eventType: "course" | "groups";
};

function searchEvents(options: SearchEventOptions) {
  let events: (Course | StudyGroup)[] =
    options.eventType === "course" ? courses : studyGroups;

  return events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === "number") {
      return options.query === event.id;
    } else if (typeof options.query === "string") {
      return event.keywords.includes(options.query);
    }
  });
}

let enrolledEvents: (Course | StudyGroup)[] = [];

function enroll(event: Course | StudyGroup) {
  enrolledEvents.push(event);
}

let searchResults = searchEvents({ query: "art", eventType: "course" });
enroll(searchResults[1]);
console.log(searchResults);
console.log(enrolledEvents);
