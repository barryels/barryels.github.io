const eventTypes = [
  "JOINED_COMPANY",
  "ROLE_AT_COMPANY_UPDATED",
  "LEFT_COMPANY",
  "HAD_EPIPHONY",
  "WAS_PROMOTED",
  "PROJECT_COMPLETED",
  "CONTACT_DETAILS_CHANGED",
  "EDUCATION_CHANGED",
  "SKILL_LEVEL_CHANGED",
] as const;

export type EventType = typeof eventTypes[number];

export type EventLogEntry = {
  id: string;
  type: EventType;
  dateTime: string;
  data?: any;
};

export type EventLog = EventLogEntry[];

export type PROJECT_COMPLETED_data = {
  name: string;
  url: string;
  technologies: string[];
  screenshots: string[];
};

export type JOINED_COMPANY_data = {
  companyName: string;
  position: string;
};
