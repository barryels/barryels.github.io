import { EventLog } from "./types";

export const eventLog: EventLog = [
  {
    id: "af77fd59-a08d-45e6-acb2-561823292370",
    type: "EDUCATION_CHANGED",
    dateTime: "2001-05-01T00:00:01",
    data: {
      institution: "CTU Training Solutions",
      achievement: "Web Design & Development Diploma",
    },
  },
  {
    id: "f4d6162e-59bf-40c3-afea-ae2b683defc3",
    type: "SKILL_LEVEL_CHANGED",
    dateTime: "2001-05-01T00:00:01",
    data: {
      name: "HTML",
      level: 1,
    },
  },
  {
    id: "df77c0f4-07f3-4380-a68b-0868f71b5d95",
    type: "SKILL_LEVEL_CHANGED",
    dateTime: "2001-05-01T00:00:01",
    data: {
      name: "CSS",
      level: 1,
    },
  },
  {
    id: "61137066-7c30-4e7e-b001-34387c533301",
    type: "SKILL_LEVEL_CHANGED",
    dateTime: "2001-05-01T00:00:01",
    data: {
      name: "JavaScript",
      level: 1,
    },
  },
  {
    id: "52c180e7-f2d0-4e9f-8f52-0c1cd8d3bd8f",
    type: "SKILL_LEVEL_CHANGED",
    dateTime: "2001-05-01T00:00:01",
    data: {
      name: "PHP",
      level: 1,
    },
  },
  {
    id: "7920e339-beae-4abc-841b-fd6977c1f206",
    type: "SKILL_LEVEL_CHANGED",
    dateTime: "2001-05-01T00:00:01",
    data: {
      name: "MySQL",
      level: 1,
    },
  },
  {
    id: "0e08527b-e7fd-49f6-9140-6f824dd15793",
    type: "JOINED_COMPANY",
    dateTime: "2001-08-01T00:00:01",
    data: {
      companyName: "Shareware Systems",
    },
  },
  {
    id: "c5fa51d8-51dd-4292-bae7-14844eed4cd3",
    type: "ROLE_AT_COMPANY_UPDATED",
    dateTime: "2001-08-01T00:00:01",
    data: {
      companyName: "Shareware Systems",
      position: "Multimedia Developer",
      date: "Aug 2001 - Oct 2003",
      startDate: "2001-08-01T00:00:01",
      endDate: "2003-10-01T23:59:59",
      description:
        "The design and development of multimedia presentations, interactive e-learning projects (for SAP) and corporate identity. These courses were used as a platform for delivering up-to-date information around the “mySAP.com” line-up of business software solutions.",
      skills: ["Flash Animation", "User Interface Design", "ActionScript"],
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
    dateTime: "2003-10-30T23:59:59",
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
    },
  },
  {
    id: "9e79cd5c-9e18-4766-862b-9f3700226ded",
    type: "ROLE_AT_COMPANY_UPDATED",
    dateTime: "2004-07-01T00:00:01",
    data: {
      companyName: "Commonwealth Academy",
      position: "IT Tutor & Network Engineer",
      date: "Jul 2004 - Nov 2006",
      startDate: "2004-07-01T00:00:01",
      endDate: "2006-11-01T23:59:59",
      description:
        "Responsibilities included developing and presenting graphic design, web design and programming courses, the management of e-mail accounts and general software-related support. The design and updating of corporate identity: Advertisements, Brochures, Newsletters, Certificates and Website.Responsibilities included developing and presenting graphic design, web design and programming courses, the management of e-mail accounts and general software-related support. The design and updating of corporate identity: Advertisements, Brochures, Newsletters, Certificates and Website.",
      skills: [
        "Teaching",
        "Corporate Identity",
        "Web Design",
        "Technical Support",
        "Web Development",
      ],
    },
  },
  {
    id: "c80087a4-d090-47a7-9c22-57d22ef065b3",
    type: "LEFT_COMPANY",
    dateTime: "2006-11-30T23:59:59",
    data: {
      companyName: "Commonwealth Academy",
    },
  },
  {
    id: "f373b666-3cfc-4b5e-a605-91a42708b381",
    type: "JOINED_COMPANY",
    dateTime: "2006-12-01T00:00:01",
    data: {
      companyName: "iDiversity Studios",
    },
  },
  {
    id: "4514e6aa-90f8-46b1-a88b-a0e900b15783",
    type: "ROLE_AT_COMPANY_UPDATED",
    dateTime: "2006-12-01T00:00:01",
    data: {
      companyName: "iDiversity Studios",
      position: "Intermediate Web Designer",
      date: "Dec 2006 - May 2007",
      startDate: "2006-12-01T00:00:01",
      endDate: "2007-05-01T23:59:59",
      description:
        "Designing websites, from initial client requirements through to layout, HTML and CSS. Projects included the implementation of designs with respect to content management systems (NetSuite, Textor, etc.). Development tasks included using necessary technologies (PHP, JavaScript and Flash) to create functional, maintainable websites.Designing websites, from initial client requirements through to layout, HTML and CSS. Projects included the implementation of designs with respect to content management systems (NetSuite, Textor, etc.). Development tasks included using necessary technologies (PHP, JavaScript and Flash) to create functional, maintainable websites.",
      skills: ["ActionScript", "PHP", "Content Management Systems (CMS)"],
    },
  },
  {
    id: "82ea5522-95c3-483b-b0af-b90265075a15",
    type: "LEFT_COMPANY",
    dateTime: "2007-04-30T23:59:59",
    data: {
      companyName: "iDiversity Studios",
    },
  },
  {
    id: "f6267a81-230c-47ca-bfa2-c720f6fb20e8",
    type: "JOINED_COMPANY",
    dateTime: "2007-05-01T00:00:01",
    data: {
      companyName: "Aqua Online",
    },
  },
  {
    id: "b73e6c55-22d7-4e09-94bc-ddb1928a0aa7",
    type: "ROLE_AT_COMPANY_UPDATED",
    dateTime: "2007-05-01T00:00:01",
    data: {
      companyName: "Aqua Online",
      position: "Flash Developer",
      date: "May 2007 - Aug 2010",
      startDate: "2007-05-01T00:00:01",
      endDate: "2010-08-01T23:59:59",
      description:
        "Architecting, developing and deploying interactive flash-based web and touchscreen interfaces, as well as Rich Media banners.Architecting, developing and deploying interactive flash-based web and touchscreen interfaces, as well as Rich Media banners.",
      skills: ["User Experience (UX)", "ActionScript", "Touch Screens"],
    },
  },
  {
    id: "345fc980-bb30-41ed-9f1e-76c3f85a96fb",
    type: "LEFT_COMPANY",
    dateTime: "2010-07-31T23:59:59",
    data: {
      companyName: "Aqua Online",
    },
  },
  {
    id: "3e86186d-98b9-4d3a-9714-68a4a0409aef",
    type: "JOINED_COMPANY",
    dateTime: "2010-08-01T00:00:01",
    data: {
      companyName: "Quirk",
    },
  },
  {
    id: "87d1b3c0-1c50-4bd3-8b1d-629169646ded",
    type: "ROLE_AT_COMPANY_UPDATED",
    dateTime: "2010-08-01T00:00:01",
    data: {
      companyName: "Quirk",
      position: "Flash Developer",
      date: "Aug 2010 - Dec 2011",
      startDate: "2010-08-01T00:00:01",
      endDate: "2011-12-01T23:59:59",
      description: "No description",
      skills: ["Flash Animation", "Web Development", "ActionScript"],
    },
  },
  {
    id: "2989718c-652c-4b01-95af-f9c58367ce5c",
    type: "ROLE_AT_COMPANY_UPDATED",
    dateTime: "2011-01-01T00:00:01",
    data: {
      companyName: "Quirk",
      position: "Senior Software Developer",
      date: "Jan 2011 - Dec 2012",
      startDate: "2011-01-01T00:00:01",
      endDate: "2012-12-01T23:59:59",
      description: "No description",
      skills: ["Web Development"],
    },
  },
  {
    id: "9c65b090-c40a-4ba7-a1f0-ba4b1f004cb7",
    type: "ROLE_AT_COMPANY_UPDATED",
    dateTime: "2013-01-01T00:00:01",
    data: {
      companyName: "Quirk",
      position: "Head of Development",
      date: "Jan 2013 - Jan 2014",
      startDate: "2013-01-01T00:00:01",
      endDate: "2014-01-01T23:59:59",
      description:
        "As Head of Development, I spent a large portion of my working day researching and implementing technologies that support current and future projects and improve the flow of work between Design, Development and Operations. I was responsible for managing a team of developers, whose solutions included responsive websites, custom CMSs and social media API integrations.As Head of Development, I spent a large portion of my working day researching and implementing technologies that support current and future projects and improve the flow of work between Design, Development and Operations. I was responsible for managing a team of developers, whose solutions included responsive websites, custom CMSs and social media API integrations.",
      skills: ["Team Leadership", "Web Development", "ActionScript", "Groovy"],
    },
  },
  {
    id: "dc877166-a74c-43d9-a53a-ce96a5befa62",
    type: "LEFT_COMPANY",
    dateTime: "2014-01-31T23:59:59",
    data: {
      companyName: "Quirk",
    },
  },
  {
    id: "16a380e8-a099-4355-b6cf-474c2ea331d9",
    type: "JOINED_COMPANY",
    dateTime: "2014-02-01T00:00:01",
    data: {
      companyName: "Freelance",
    },
  },
  {
    id: "d4e357c4-ea19-4ab3-9dfe-b92220480290",
    type: "ROLE_AT_COMPANY_UPDATED",
    dateTime: "2014-02-01T00:00:01",
    data: {
      companyName: "Freelance",
      position: "Freelance Creative Developer and UI Designer",
      date: "Feb 2014 - Jun 2014",
      startDate: "2014-02-01T00:00:01",
      endDate: "2014-06-01T23:59:59",
      description:
        "Architecting, developing and deploying interactive websites, with a strong focus on user experience design, semantic markup and rock-solid back-ends.Architecting, developing and deploying interactive websites, with a strong focus on user experience design, semantic markup and rock-solid back-ends.",
      skills: ["Web Development", "JavaScript", "Groovy"],
    },
  },
  {
    id: "34284ab6-aa14-4d17-88fc-c3c13c8fb046",
    type: "JOINED_COMPANY",
    dateTime: "2014-06-01T00:00:01",
    data: {
      companyName: "BBD",
    },
  },
  {
    id: "b9c5c29a-ae5a-44ac-9e35-a41ea30dcf38",
    type: "ROLE_AT_COMPANY_UPDATED",
    dateTime: "2014-06-01T00:00:01",
    data: {
      companyName: "BBD",
      position: "Software Developer",
      date: "Jun 2014 - Jul 2015",
      startDate: "2014-06-01T00:00:01",
      endDate: "2015-07-01T23:59:59",
      description:
        "Working with a diverse set of clients such as SARS, King Price & Standard Bank has given me the opportunity to delve deeper into TDD and source control management workflows. I’ve also had the good fortune of being able to learn and use different programming languages and design patterns in the development of bespoke single page web applications.Working with a diverse set of clients such as SARS, King Price & Standard Bank has given me the opportunity to delve deeper into TDD and source control management workflows. I’ve also had the good fortune of being able to learn and use different programming languages and design patterns in the development of bespoke single page web applications.",
      skills: ["Software Architecture", "AngularJS", "REST APIs", "JavaScript"],
    },
  },
  {
    id: "45f5cb75-2049-4b28-bbc1-f4458f2ed436",
    type: "LEFT_COMPANY",
    dateTime: "2015-07-31T23:59:59",
    data: {
      companyName: "BBD",
    },
  },
  {
    id: "eb9c2d97-4753-45ef-bb0d-6cde9f3f7f1a",
    type: "JOINED_COMPANY",
    dateTime: "2015-08-01T00:00:01",
    data: {
      companyName: "Fogg Experiential Design",
    },
  },
  {
    id: "15a78c5e-b839-4364-8fb1-c9a04a97247e",
    type: "ROLE_AT_COMPANY_UPDATED",
    dateTime: "2015-08-01T00:00:01",
    data: {
      companyName: "Fogg Experiential Design",
      position: "Senior Developer",
      date: "Aug 2015 - Jun 2016",
      startDate: "2015-08-01T00:00:01",
      endDate: "2016-06-01T23:59:59",
      description:
        "Architecting and developing websites and web-based applications. Some of the projects I architected and built the foundational back-end and front-end components for, include:<br/>- A dynamic dashboard to display data pulled from Crimson Hexagon and Google spreadsheets.<br/>- A bespoke WordPress theme for http://capetown.travel with custom post types, Timber templates and support for using an external data source for blog posts.<br/>- A household energy consumption calculator, back-end and REST API written in PHP, front-end in MithrilJS.",
      skills: ["Software Architecture", "Team Leadership", "JavaScript", "PHP"],
    },
  },
  {
    id: "d37450f9-4eaf-47a4-954f-c9e04e5792fb",
    type: "LEFT_COMPANY",
    dateTime: "2016-06-30T23:59:59",
    data: {
      companyName: "Fogg Experiential Design",
    },
  },
  {
    id: "532b04bc-bb4b-4f2f-ab6f-24f7999e7088",
    type: "JOINED_COMPANY",
    dateTime: "2016-07-01T00:00:01",
    data: {
      companyName: "Digital Path",
    },
  },
  {
    id: "a4ce0f04-8a5d-413c-aaad-a59467075f4f",
    type: "ROLE_AT_COMPANY_UPDATED",
    dateTime: "2016-07-01T00:00:01",
    data: {
      companyName: "Digital Path",
      position: "Front-end Developer and Team Lead",
      date: "Jul 2016 - Sep 2017",
      startDate: "2016-07-01T00:00:01",
      endDate: "2017-09-01T23:59:59",
      description:
        "Amongst other projects, I’ve built a white label solution to dynamically generate 40+ mobile applications for insurance companies. I’ve also designed & implemented a project management process to ensure feature requirements can be gathered effectively, so as to give other developers a clear vision of what to tackle next.Amongst other projects, I’ve built a white label solution to dynamically generate 40+ mobile applications for insurance companies. I’ve also designed & implemented a project management process to ensure feature requirements can be gathered effectively, so as to give other developers a clear vision of what to tackle next.",
      skills: [
        "Software Architecture",
        "AngularJS",
        "Single Page Applications",
        "Web Development",
      ],
    },
  },
  {
    id: "e32bb271-fdde-41db-9d90-eb5568d4c80e",
    type: "LEFT_COMPANY",
    dateTime: "2017-09-30T23:59:59",
    data: {
      companyName: "Digital Path",
    },
  },
  {
    id: "ad540b0e-7d7a-4c52-a34d-a0c99da89362",
    type: "JOINED_COMPANY",
    dateTime: "2017-10-01T00:00:01",
    data: {
      companyName: "Qualica Technologies",
    },
  },
  {
    id: "9a33ed5a-925f-41c9-9d46-023a850bf7d4",
    type: "ROLE_AT_COMPANY_UPDATED",
    dateTime: "2017-10-01T00:00:01",
    data: {
      companyName: "Qualica Technologies",
      position: "Web Developer",
      date: "Oct 2017 - Jun 2018",
      startDate: "2017-10-01T00:00:01",
      endDate: "2018-06-01T23:59:59",
      description: "No description",
      skills: ["REST APIs", "React.js"],
    },
  },
  {
    id: "f9585812-9e5e-4a78-98ae-6edbcc3aeadf",
    type: "LEFT_COMPANY",
    dateTime: "2018-05-31T23:59:59",
    data: {
      companyName: "Qualica Technologies",
    },
  },
  {
    id: "b744f206-b907-4a00-a208-719bf75001b4",
    type: "JOINED_COMPANY",
    dateTime: "2018-06-01T00:00:01",
    data: {
      companyName: "Platform45",
    },
  },
  {
    id: "d77a7ba7-abd9-490b-9bfd-c1f9a1ab2bb4",
    type: "ROLE_AT_COMPANY_UPDATED",
    dateTime: "2018-06-01T00:00:01",
    data: {
      companyName: "Platform45",
      position: "Software Engineer",
      date: "Jun 2018 - Jul 2021",
      startDate: "2018-06-01T00:00:01",
      endDate: "2021-07-01T23:59:59",
      description: "No description",
      skills: [
        "Ruby on Rails",
        "Cascading Style Sheets (CSS)",
        "Team Leadership",
        "JavaScript",
      ],
    },
  },
  {
    id: "5ce08aec-4c24-4d27-ab90-1c7accac4141",
    type: "ROLE_AT_COMPANY_UPDATED",
    dateTime: "2021-08-01T00:00:01",
    data: {
      companyName: "Platform45",
      position: "Technical Architect",
      date: "Aug 2021 - Present",
      startDate: "2021-08-01T00:00:01",
      description: "No description",
      skills: [
        "Team Leadership",
        "Technical Architecture",
        "Web Application Development",
        "Amazon Web Services (AWS)",
        "React.js",
      ],
    },
  },
];
