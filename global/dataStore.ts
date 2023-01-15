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

export type EventLogEntry = {
  id: string;
  type: EventType;
  dateTime: string;
  data?: any;
};

type EventLog = EventLogEntry[];

export const eventLog: EventLog = [
  {
    id: "0e08527b-e7fd-49f6-9140-6f824dd15793",
    type: "JOINED_COMPANY",
    dateTime: "2001-08-01T00:00:01",
    data: {
      companyName: "Shareware Systems",
      position: "Multimedia Developer",
      date: "Aug 2001 - Oct 2003",
      dateFormatted: "2001-08-01 - 2003-10-01",
      description:
        "The design and development of multimedia presentations, interactive e-learning projects (for SAP) and corporate identity. These courses were used as a platform for delivering up-to-date information around the “mySAP.com” line-up of business software solutions.",
      skills: "Flash Animation, User Interface Design, ActionScript",
    },
  },
  {
    id: "301bb0ca-ddff-4953-9da5-108c82b30bbe",
    type: "PROJECT_COMPLETED",
    dateTime: "2001-10-01T00:00:01",
    data: {
      name: "Shareware Systems Website",
      url: "TODO",
      technologies: ["Adobe Flash"],
      screenshots: [],
    },
  },
  {
    id: "40fccd29-7097-4be7-936e-0c2a6b8dcfc0",
    type: "HAD_EPIPHONY",
    dateTime: "2002-01-01T00:00:01",
    data: {
      realisation: "Programming is hard",
    },
  },
  {
    id: "5525d7cc-8851-4356-a605-2e5aa117baa4",
    type: "LEFT_COMPANY",
    dateTime: "2003-10-30T00:00:01",
    data: {
      companyName: "Shareware Systems",
    },
  },
  {
    id: "22f3e450-bbfc-4391-b024-e28008c8c4f5",
    type: "JOINED_COMPANY",
    dateTime: "2004-07-01T00:00:01",
    data: {
      companyName: "Commonwealth Academy",
      position: "IT Tutor & Network Engineer",
      date: "Jul 2004 - Nov 2006",
      dateFormatted: "2004-07-01 - 2006-11-01",
      description:
        "Responsibilities included developing and presenting graphic design, web design and programming courses, the management of e-mail accounts and general software-related support. The design and updating of corporate identity: Advertisements, Brochures, Newsletters, Certificates and Website.Responsibilities included developing and presenting graphic design, web design and programming courses, the management of e-mail accounts and general software-related support. The design and updating of corporate identity: Advertisements, Brochures, Newsletters, Certificates and Website.",
      skills:
        "Teaching, Corporate Identity, Web Design, Technical Support, Web Development",
    },
  },
  {
    id: "f373b666-3cfc-4b5e-a605-91a42708b381",
    type: "JOINED_COMPANY",
    dateTime: "2006-12-01T00:00:01",
    data: {
      companyName: "iDiversity Studios",
      position: "Intermediate Web Designer",
      date: "Dec 2006 - May 2007",
      dateFormatted: "2006-12-01 - 2007-05-01",
      description:
        "Designing websites, from initial client requirements through to layout, HTML and CSS. Projects included the implementation of designs with respect to content management systems (NetSuite, Textor, etc.). Development tasks included using necessary technologies (PHP, JavaScript and Flash) to create functional, maintainable websites.Designing websites, from initial client requirements through to layout, HTML and CSS. Projects included the implementation of designs with respect to content management systems (NetSuite, Textor, etc.). Development tasks included using necessary technologies (PHP, JavaScript and Flash) to create functional, maintainable websites.",
      skills: "ActionScript, PHP, Content Management Systems (CMS)",
    },
  },
  {
    id: "f6267a81-230c-47ca-bfa2-c720f6fb20e8",
    type: "JOINED_COMPANY",
    dateTime: "2007-05-01T00:00:01",
    data: {
      companyName: "Aqua Online",
      position: "Flash Developer",
      date: "May 2007 - Aug 2010",
      dateFormatted: "2007-05-01 - 2010-08-01",
      description:
        "Architecting, developing and deploying interactive flash-based web and touchscreen interfaces, as well as Rich Media banners.Architecting, developing and deploying interactive flash-based web and touchscreen interfaces, as well as Rich Media banners.",
      skills: "User Experience (UX), ActionScript, Touch Screens",
    },
  },
  {
    id: "3e86186d-98b9-4d3a-9714-68a4a0409aef",
    type: "JOINED_COMPANY",
    dateTime: "2010-08-01T00:00:01",
    data: {
      companyName: "Quirk",
      position: "Flash Developer",
      date: "Aug 2010 - Dec 2011",
      dateFormatted: "2010-08-01 - 2011-12-01",
      description: "No description",
      skills: "Flash Animation, Web Development, ActionScript",
    },
  },
  {
    id: "2989718c-652c-4b01-95af-f9c58367ce5c",
    type: "JOINED_COMPANY",
    dateTime: "2011-01-01T00:00:01",
    data: {
      companyName: "Quirk",
      position: "Senior Software Developer",
      date: "Jan 2011 - Dec 2012",
      dateFormatted: "2011-01-01 - 2012-12-01",
      description: "No description",
      skills: "Web Development",
    },
  },
  {
    id: "9c65b090-c40a-4ba7-a1f0-ba4b1f004cb7",
    type: "JOINED_COMPANY",
    dateTime: "2013-01-01T00:00:01",
    data: {
      companyName: "Quirk",
      position: "Head of Development",
      date: "Jan 2013 - Jan 2014",
      dateFormatted: "2013-01-01 - 2014-01-01",
      description:
        "As Head of Development, I spent a large portion of my working day researching and implementing technologies that support current and future projects and improve the flow of work between Design, Development and Operations. I was responsible for managing a team of developers, whose solutions included responsive websites, custom CMSs and social media API integrations.As Head of Development, I spent a large portion of my working day researching and implementing technologies that support current and future projects and improve the flow of work between Design, Development and Operations. I was responsible for managing a team of developers, whose solutions included responsive websites, custom CMSs and social media API integrations.",
      skills: "Team Leadership, Web Development, ActionScript, Groovy",
    },
  },
  {
    id: "16a380e8-a099-4355-b6cf-474c2ea331d9",
    type: "JOINED_COMPANY",
    dateTime: "2014-02-01T00:00:01",
    data: {
      companyName: "Freelance",
      position: "Freelance Creative Developer and UI Designer",
      date: "Feb 2014 - Jun 2014",
      dateFormatted: "2014-02-01 - 2014-06-01",
      description:
        "Architecting, developing and deploying interactive websites, with a strong focus on user experience design, semantic markup and rock-solid back-ends.Architecting, developing and deploying interactive websites, with a strong focus on user experience design, semantic markup and rock-solid back-ends.",
      skills: "Web Development, JavaScript, Groovy",
    },
  },
  {
    id: "34284ab6-aa14-4d17-88fc-c3c13c8fb046",
    type: "JOINED_COMPANY",
    dateTime: "2014-06-01T00:00:01",
    data: {
      companyName: "BBD",
      position: "Software Developer",
      date: "Jun 2014 - Jul 2015",
      dateFormatted: "2014-06-01 - 2015-07-01",
      description:
        "Working with a diverse set of clients such as SARS, King Price & Standard Bank has given me the opportunity to delve deeper into TDD and source control management workflows. I’ve also had the good fortune of being able to learn and use different programming languages and design patterns in the development of bespoke single page web applications.Working with a diverse set of clients such as SARS, King Price & Standard Bank has given me the opportunity to delve deeper into TDD and source control management workflows. I’ve also had the good fortune of being able to learn and use different programming languages and design patterns in the development of bespoke single page web applications.",
      skills: "Software Architecture, AngularJS, REST APIs, JavaScript",
    },
  },
  {
    id: "eb9c2d97-4753-45ef-bb0d-6cde9f3f7f1a",
    type: "JOINED_COMPANY",
    dateTime: "2015-08-01T00:00:01",
    data: {
      companyName: "Fogg Experiential Design",
      position: "Senior Developer",
      date: "Aug 2015 - Jun 2016",
      dateFormatted: "2015-08-01 - 2016-06-01",
      description:
        "Architecting and developing websites and web-based applications. Some of the projects I architected and built the foundational back-end and front-end components for, include:<br/>- A dynamic dashboard to display data pulled from Crimson Hexagon and Google spreadsheets.<br/>- A bespoke WordPress theme for http://capetown.travel with custom post types, Timber templates and support for using an external data source for blog posts.<br/>- A household energy consumption calculator, back-end and REST API written in PHP, front-end in MithrilJS.",
      skills: "Software Architecture, Team Leadership, JavaScript, PHP",
    },
  },
  {
    id: "532b04bc-bb4b-4f2f-ab6f-24f7999e7088",
    type: "JOINED_COMPANY",
    dateTime: "2016-07-01T00:00:01",
    data: {
      companyName: "Digital Path",
      position: "Front-end Developer and Team Lead",
      date: "Jul 2016 - Sep 2017",
      dateFormatted: "2016-07-01 - 2017-09-01",
      description:
        "Amongst other projects, I’ve built a white label solution to dynamically generate 40+ mobile applications for insurance companies. I’ve also designed & implemented a project management process to ensure feature requirements can be gathered effectively, so as to give other developers a clear vision of what to tackle next.Amongst other projects, I’ve built a white label solution to dynamically generate 40+ mobile applications for insurance companies. I’ve also designed & implemented a project management process to ensure feature requirements can be gathered effectively, so as to give other developers a clear vision of what to tackle next.",
      skills:
        "Software Architecture, AngularJS, Single Page Applications, Web Development",
    },
  },
  {
    id: "9a33ed5a-925f-41c9-9d46-023a850bf7d4",
    type: "JOINED_COMPANY",
    dateTime: "2017-10-01T00:00:01",
    data: {
      companyName: "Qualica Technologies",
      position: "Web Developer",
      date: "Oct 2017 - Jun 2018",
      dateFormatted: "2017-10-01 - 2018-06-01",
      description: "No description",
      skills: "REST APIs, React.js",
    },
  },
  {
    id: "b744f206-b907-4a00-a208-719bf75001b4",
    type: "JOINED_COMPANY",
    dateTime: "2018-06-01T00:00:01",
    data: {
      companyName: "Platform45",
      position: "Software Engineer",
      date: "Jun 2018 - Jul 2021",
      dateFormatted: "2018-06-01 - 2021-07-01",
      description: "No description",
      skills:
        "Ruby on Rails, Cascading Style Sheets (CSS), Team Leadership, JavaScript",
    },
  },
  {
    id: "5ce08aec-4c24-4d27-ab90-1c7accac4141",
    type: "JOINED_COMPANY",
    dateTime: "2021-08-01T00:00:01",
    data: {
      companyName: "Platform45",
      position: "Technical Architect",
      date: "Aug 2021 - Present",
      dateFormatted: "2021-08-01 - Present",
      description: "No description",
      skills:
        "Team Leadership, Technical Architecture, Web Application Development, Amazon Web Services (AWS), React.js",
    },
  },
];

console.log(eventLog.length);

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

type Project = {
  name: string;
  url: string;
  technologies: string[];
  screenshots: string[];
};
type ProjectsGroupedByYear = [year: number, projects: Project[]];

function getYearFromDateTimeString(dateTimeString: string): number {
  return new Date(dateTimeString).getFullYear();
}

type EventLogEntriesPerYear = {
  year: number;
  events: EventLogEntry[];
};

export function getEventLogEntriesGroupedByYear(): EventLogEntriesPerYear | {} {
  const result = eventLog.reduce((grouping, eventLogEntry) => {
    const year = getYearFromDateTimeString(eventLogEntry.dateTime);
    grouping[year] = grouping[year] ?? { events: [] };
    grouping[year].events.push(eventLogEntry);
    return grouping;
  }, {});

  return result || {};
}

// console.log("getEventLogEntriesGroupedByYea()");
// console.log(getEventLogEntriesGroupedByYear());

// console.log("getProjectsGroupeByYear()");
// console.log(getProjectsGroupeByYear());

// console.log("getEventLogEntriesGroupedByYea() after");
// console.log(getEventLogEntriesGroupedByYear());

function getProjectsGroupeByYear(): EventLogEntriesPerYear | {} {
  const eventLogEntriesGroupedByYear = getEventLogEntriesGroupedByYear();
  return Object.keys(eventLogEntriesGroupedByYear).reduce(
    (accumulator, key) => {
      accumulator[key] = accumulator[key] ?? { events: [] };
      accumulator[key].events = eventLogEntriesGroupedByYear[key].events.filter(
        (eventLogEntry: EventLogEntry) => {
          return eventLogEntry.type === "PROJECT_COMPLETED";
        }
      );

      return accumulator;
    },
    {}
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
