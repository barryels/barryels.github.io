import { EventLogEntry, CurrentEmployment } from "./types";
import { eventLog } from "./EventLog";

function getCurrentCompany(): CurrentEmployment | null {
  return (
    eventLog
      .slice()
      .reverse()
      .find((eventLogEntry) => {
        return eventLogEntry.type === "ROLE_AT_COMPANY_UPDATED";
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
    const year = getYearFromDateTimeString(eventLogEntry.occurredAt);
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

export type Skill = {
  name: string;
  level: number;
};

export function getCurrentSkills(): Skill[] | [] {
  return eventLog
    .slice()
    .reverse()
    .filter((eventLogEntry) => {
      return eventLogEntry.type === "SKILL_LEVEL_CHANGED";
    })
    .map((skillEvent) => {
      return skillEvent.data;
    });
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
    headline: "Father, Husband, cat-herder",
    about:
      "I am passionate about building better experiences for end users, and consequently helping businesses achieve their goals. Whether through technical innovation, solid user experience or internal process re-engineering, my focus is on continuous learning and consistent improvement over time. I have been fortunate enough to experience 20+ years of building solutions using a wide range of technologies within a multitude of business domains, most notably: healthcare, event management, education and insurance.",
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
