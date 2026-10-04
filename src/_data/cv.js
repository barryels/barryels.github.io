import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const career = JSON.parse(
  readFileSync(join(dirname(fileURLToPath(import.meta.url)), "career.json"), "utf8"),
);

function parseDate(value) {
  if (!value) {
    return null;
  }

  const [year, month, day] = value.split("-").map(Number);
  return { year, month, day, iso: value };
}

function formatMonthYear(value) {
  const parsed = parseDate(value);
  if (!parsed) {
    return "Present";
  }

  return `${MONTHS[parsed.month - 1]} ${parsed.year}`;
}

function formatRange(startDate, endDate) {
  return `${formatMonthYear(startDate)} – ${endDate ? formatMonthYear(endDate) : "Present"}`;
}

function compareIsoDesc(a, b) {
  if (a === b) {
    return 0;
  }
  if (!a) {
    return -1;
  }
  if (!b) {
    return 1;
  }
  return a < b ? 1 : -1;
}

function isMoreRecent(candidate, current) {
  if (candidate === current) {
    return false;
  }
  if (candidate === null) {
    return true;
  }
  if (current === null) {
    return false;
  }
  return candidate > current;
}

function buildCv(events = []) {
  const roles = new Map();
  const projects = new Map();

  for (const event of events) {
    if (event.type === "ROLE_STARTED") {
      roles.set(event.data.roleId, {
        id: event.data.roleId,
        company: event.data.company,
        position: event.data.position,
        startDate: event.data.startDate,
        endDate: event.data.endDate ?? null,
        location: event.data.location,
        skills: event.data.skills ?? [],
        description: event.data.description ?? "",
        projects: [],
      });
    }

    if (event.type === "ROLE_ENDED") {
      const role = roles.get(event.data.roleId);
      if (role) {
        role.endDate = event.data.endDate;
      }
    }

    if (event.type === "PROJECT_STARTED") {
      projects.set(event.data.projectId, {
        id: event.data.projectId,
        title: event.data.title,
        startDate: event.data.startDate,
        completedDate: null,
        roleId: event.data.roleId,
        summary: event.data.summary ?? "",
      });
    }

    if (event.type === "PROJECT_COMPLETED") {
      const project = projects.get(event.data.projectId);
      if (project) {
        project.completedDate = event.data.completedDate;
      }
    }
  }

  for (const project of projects.values()) {
    const role = roles.get(project.roleId);
    if (!role) {
      continue;
    }

    role.projects.push({
      ...project,
      dateLabel: formatRange(project.startDate, project.completedDate),
    });
  }

  for (const role of roles.values()) {
    role.dateLabel = formatRange(role.startDate, role.endDate);
    role.projects.sort((a, b) => compareIsoDesc(a.startDate, b.startDate));
  }

  const roleList = [...roles.values()].sort((a, b) => {
    const startCmp = compareIsoDesc(a.startDate, b.startDate);
    if (startCmp !== 0) {
      return startCmp;
    }

    return compareIsoDesc(a.endDate, b.endDate);
  });

  const companies = [];
  for (const role of roleList) {
    const last = companies[companies.length - 1];
    if (last && last.name === role.company) {
      last.roles.push(role);
      continue;
    }

    companies.push({
      name: role.company,
      roles: [role],
    });
  }

  for (const company of companies) {
    const startDates = company.roles.map((role) => role.startDate);
    const endDates = company.roles.map((role) => role.endDate);
    company.startDate = startDates.reduce((earliest, date) =>
      date < earliest ? date : earliest,
    );
    company.endDate = endDates.includes(null)
      ? null
      : endDates.reduce((latest, date) => (date > latest ? date : latest));
    company.location = company.roles[0].location;
    company.dateLabel = formatRange(company.startDate, company.endDate);
  }

  const skillMap = new Map();
  for (const role of roleList) {
    for (const skill of role.skills) {
      const existing = skillMap.get(skill) ?? {
        name: skill,
        count: 0,
        lastUsed: role.endDate,
      };
      existing.count += 1;
      if (isMoreRecent(role.endDate, existing.lastUsed)) {
        existing.lastUsed = role.endDate;
      }
      skillMap.set(skill, existing);
    }
  }

  const skills = [...skillMap.values()].sort((a, b) => {
    if (a.lastUsed !== b.lastUsed) {
      return compareIsoDesc(a.lastUsed, b.lastUsed);
    }
    if (a.count !== b.count) {
      return b.count - a.count;
    }
    return a.name.localeCompare(b.name);
  });

  const current = roleList.find((role) => role.endDate === null) ?? roleList[0];
  const firstStart = roleList
    .map((role) => role.startDate)
    .reduce((earliest, date) => (date < earliest ? date : earliest));

  return {
    name: "Barry Els",
    headline: current ? `${current.position} at ${current.company}` : "",
    location: current?.location ?? "",
    startedLabel: `Since ${formatMonthYear(firstStart)}`,
    summary:
      "I am passionate about building better experiences for end users, and consequently helping businesses achieve their goals. Whether through technical innovation, solid user experience or internal process re-engineering, my focus is on continuous learning and consistent improvement over time.",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/barryels/",
        external: true,
      },
      {
        label: "GitHub",
        href: "https://github.com/barryels",
        external: true,
      },
      {
        label: "Email",
        href: "mailto:barryels@gmail.com",
        external: false,
      },
    ],
    companies,
    skills,
  };
}

export default function () {
  return buildCv(career.events);
}
