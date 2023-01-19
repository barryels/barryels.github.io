import { EventLogEntry, JOINED_COMPANY_data } from "./types";
import { eventLog } from "./EventLog";

function getCurrentCompany(): JOINED_COMPANY_data | null {
  return (
    eventLog
      .slice()
      .reverse()
      .find((eventLogEntry) => {
        return eventLogEntry.type === "JOINED_COMPANY";
      }).data || null
  );
}

function getYearFromDateTimeString(dateTimeString: string): number {
  return new Date(dateTimeString).getFullYear();
}

export type EventLogEntriesPerYear = {
  year: number;
  events: EventLogEntry[];
};

export function getEventLogEntriesGroupedByYear():
  | EventLogEntriesPerYear[]
  | [] {
  const result = eventLog.reduce((accumulator, eventLogEntry) => {
    const year = getYearFromDateTimeString(eventLogEntry.dateTime);
    const existingYearItemInAccumulator = accumulator.find((yearItem) => {
      return yearItem.year === year;
    });

    if (!existingYearItemInAccumulator) {
      accumulator.push({
        year: year,
        events: [eventLogEntry],
      });
    } else {
      existingYearItemInAccumulator.events.push(eventLogEntry);
    }
    return accumulator;
  }, []);

  return result || [];
}

export function getSiteInfo() {
  return {
    links: [
      {
        name: "GitHub",
        url: "https://github.com/barryels",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/barryels/",
      },
    ],
    fullName: "Barry Els",
    metaKeywords: [
      "barry els",
      "programmer",
      "creative technologist",
      "technical architect",
    ],
    currentCompanyName: getCurrentCompany().companyName || "",
    currentPosition: getCurrentCompany().position || "",
    about:
      "I am passionate about building a better web for end users, and consequently the businesses that utilise this amazing platform. Whether through technical innovation, solid user experience or process engineering. My focus is always on making small, consistent improvements over time. I have been fortunate to experience many years building solutions using a wide range of technologies within a multitude of business domains.",
    careerHighlights: [
      {
        description:
          "Leading a team of engineers in the development of a bespoke Content Management micro-platform for rich digital experiences within the retail space.",
      },
      {
        description:
          "Architecting and leading a team of engineers in the development of a white-labelled Hybrid mobile application platform to rapidly deploy custom mobile applications for insurance companies.",
      },
    ],
  };
}
