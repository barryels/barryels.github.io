const eventTypes = [
  "JOINED_COMPANY",
  "LEFT_COMPANY",
  "HAD_EPIPHONY",
  "WAS_PROMOTED",
  "PROJECT_COMPLETED",
  "CONTACT_DETAILS_CHANGED",
  "SKILL_LEVEL_CHANGED",
] as const;

type EventType = typeof eventTypes[number];

type EventLogEntry = {
  type: EventType;
  dateTime: string;
  data?: any;
};

type EventLog = EventLogEntry[];

export const eventLog: EventLog = [
  {
    type: "JOINED_COMPANY",
    dateTime: "2001-08-01T09:00:00",
    data: {
      companyName: "Shareware Systems",
      position: "Multimedia Developer",
    },
  },
  {
    type: "PROJECT_COMPLETED",
    dateTime: "2001-10-01T09:00:00",
    data: {
      name: "Shareware Systems Website",
      url: "TODO",
      technologies: ["Adobe Flash"],
      screenshots: [],
    },
  },
  {
    type: "HAD_EPIPHONY",
    dateTime: "2002-01-01T09:00:00",
    data: {
      realisation: "Programming is hard",
    },
  },
  {
    type: "LEFT_COMPANY",
    dateTime: "2003-10-30T09:00:00",
    data: {
      companyName: "Shareware Systems",
    },
  },
  {
    type: "JOINED_COMPANY",
    dateTime: "2004-07-01T09:00:00",
    data: {
      companyName: "Commonwealth Academy",
      position: "IT Tutor & Network Engineer",
    },
  },
  {
    type: "JOINED_COMPANY",
    dateTime: "2018-06-01T09:00:00",
    data: {
      companyName: "Platform45",
      position: "Technical Architect",
    },
  },
];

type JOINED_COMPANY_data = {
  companyName: string;
  position: string;
};

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

export const data = {
  links: [
    {
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
  events: eventLog,
};
