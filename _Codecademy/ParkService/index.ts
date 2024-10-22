import {
  RaccoonMeadowsActivity,
  RaccoonMeadowsVolunteers,
  raccoonMeadowsVolunteers,
} from "./raccoon-meadows-log";

import {
  WolfPointActivity,
  WolfPointVolunteers,
  wolfPointVolunteers,
} from "./wolf-point-log";

type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;

type Volunteers = {
  id: number;
  name: string;
  activities: CombinedActivity[];
};

function combineVolunteers(
  volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
) {
  return volunteers.map((volunteer) => {
    let id = volunteer.id;
    if (typeof id === "string") {
      id = parseInt(id, 10);
    }
    return {
      id,
      name: volunteer.name,
      activities: volunteer.activities,
    };
  });
}

function isVerified(verified: string | boolean) {
  if (typeof verified === "string") {
    switch (verified) {
      case "true":
        return true;
      case "false":
        return false;
    }
  }
  return verified;
}

function getHours(activity: CombinedActivity) {
  if ("hours" in activity) {
    return activity.hours;
  } else {
    return activity.time;
  }
}

function calculateHours(volunteers: Volunteers[]) {
  return volunteers.map((volunteer) => {
    let hours = 0;

    volunteer.activities.forEach((activity) => {
      if (isVerified(activity.verified)) {
        hours += getHours(activity);
      }
    });

    return {
      id: volunteer.id,
      name: volunteer.name,
      hours: hours,
    };
  });
}

function byHours(a, b) {
  return b.hours - a.hours;
}

const combinedVolunteers = combineVolunteers(
  [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
);

const result = calculateHours(combinedVolunteers);
console.log(result.sort(byHours));
