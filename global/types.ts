const eventTypes = [
  "JOINED_COMPANY",
  "ROLE_AT_COMPANY_UPDATED",
  "LEFT_COMPANY",
  "HAD_EPIPHONY",
  "PROJECT_COMPLETED",
  "CONTACT_DETAILS_CHANGED",
  "EDUCATION_CHANGED",
  "SKILL_LEVEL_CHANGED",
] as const;
export type EventType = typeof eventTypes[number];

type TwoDigitString = `${number}${number}`;
type FourDigitString = `${number}${number}${number}${number}`;
export type SimpleDateTime =
  `${FourDigitString}-${TwoDigitString}-${TwoDigitString}T${TwoDigitString}:${TwoDigitString}:${TwoDigitString}Z`;

export type EventLogEntry = {
  id: string;
  type: EventType;
  occurredAt: SimpleDateTime;
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
