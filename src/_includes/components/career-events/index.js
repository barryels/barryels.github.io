const SVG_NS = "http://www.w3.org/2000/svg";
const REFRESH_INTERVAL = 60_000;
const EVENT_SERIES = [
  { type: "ROLE_STARTED", label: "Roles started", color: "#5b6ee1" },
  { type: "PROJECT_STARTED", label: "Projects started", color: "#2a9d8f" },
  { type: "TASK_COMPLETED", label: "Tasks completed", color: "#e89b3c" },
];
const COMPANY_COLORS = ["#5b6ee1", "#2a9d8f", "#e89b3c", "#ad6bd6", "#df6b77"];

function svgElement(name, attributes = {}) {
  const element = document.createElementNS(SVG_NS, name);
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  return element;
}

function addText(svg, value, x, y, className, attributes = {}) {
  const text = svgElement("text", { x, y, class: className, ...attributes });
  text.textContent = value;
  svg.append(text);
  return text;
}

function parseDate(value) {
  if (!value) {
    return null;
  }
  const date = new Date(`${value.slice(0, 10)}T00:00:00.000Z`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function startOfMonth(date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
}

function endOfToday() {
  const end = new Date();
  end.setUTCHours(23, 59, 59, 999);
  return end;
}

function endOfMonth(date) {
  const end = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0),
  );
  end.setUTCHours(23, 59, 59, 999);
  return end;
}

function getDateBounds(events) {
  const eventDates = events
    .map((event) => new Date(event.timestamp))
    .filter((date) => !Number.isNaN(date.getTime()));
  const minimum = eventDates.length
    ? new Date(Math.min(...eventDates.map((date) => date.getTime())))
    : new Date();
  const start = startOfMonth(minimum);
  const currentMonth = startOfMonth(new Date());
  const monthCount = Math.max(
    0,
    (currentMonth.getUTCFullYear() - start.getUTCFullYear()) * 12 +
      currentMonth.getUTCMonth() -
      start.getUTCMonth(),
  );
  return { start, monthCount };
}

function getInitialRange(events) {
  const bounds = getDateBounds(events);
  return { start: bounds.start, end: endOfToday(), preset: "all" };
}

function formatMonth(date) {
  return date.toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function eventDate(event) {
  const date = new Date(event.timestamp);
  return Number.isNaN(date.getTime()) ? null : date;
}

function replayEvents(events) {
  const roles = new Map();
  const projects = new Map();

  for (const event of events) {
    const data = event.data ?? {};
    if (event.type === "ROLE_STARTED" && data.roleId) {
      roles.set(data.roleId, {
        ...data,
        startDate: data.startDate ?? event.timestamp.slice(0, 10),
        endDate: data.endDate ?? null,
      });
    } else if (event.type === "ROLE_ENDED" && data.roleId) {
      const role = roles.get(data.roleId);
      if (role) {
        role.endDate = data.endDate ?? event.timestamp.slice(0, 10);
      }
    } else if (event.type === "PROJECT_STARTED" && data.projectId) {
      projects.set(data.projectId, {
        ...data,
        startDate: data.startDate ?? event.timestamp.slice(0, 10),
        completedDate: null,
      });
    } else if (event.type === "PROJECT_COMPLETED" && data.projectId) {
      const project = projects.get(data.projectId);
      if (project) {
        project.completedDate =
          data.completedDate ?? event.timestamp.slice(0, 10);
      }
    }
  }

  return {
    roles: [...roles.values()],
    projects: [...projects.values()],
  };
}

function isWithinRange(date, range) {
  return date && date >= range.start && date <= range.end;
}

function overlapsRange(startValue, endValue, range) {
  const start = parseDate(startValue);
  const end = parseDate(endValue) ?? new Date();
  return start && start <= range.end && end >= range.start;
}

function formatTick(date, monthly) {
  return monthly
    ? date.toLocaleDateString("en-GB", {
        month: "short",
        year: "2-digit",
        timeZone: "UTC",
      })
    : String(date.getUTCFullYear());
}

function buildActivityChart(container, events, range) {
  const monthly = range.end - range.start <= 2 * 366 * 24 * 60 * 60 * 1000;
  const bins = new Map();

  for (const event of events) {
    if (!EVENT_SERIES.some((series) => series.type === event.type)) {
      continue;
    }
    const date = eventDate(event);
    if (!isWithinRange(date, range)) {
      continue;
    }

    const key = monthly
      ? `${date.getUTCFullYear()}-${date.getUTCMonth()}`
      : String(date.getUTCFullYear());
    const values =
      bins.get(key) ??
      Object.fromEntries(EVENT_SERIES.map(({ type }) => [type, 0]));
    values[event.type] += 1;
    bins.set(key, values);
  }

  const first = new Date(range.start);
  const last = new Date(range.end);
  const dates = [];
  if (monthly) {
    first.setUTCDate(1);
    last.setUTCDate(1);
    for (
      const date = new Date(first);
      date <= last;
      date.setUTCMonth(date.getUTCMonth() + 1)
    ) {
      dates.push(new Date(date));
    }
  } else {
    for (
      let year = first.getUTCFullYear();
      year <= last.getUTCFullYear();
      year += 1
    ) {
      dates.push(new Date(Date.UTC(year, 0, 1)));
    }
  }

  const svg = svgElement("svg", {
    class: "career-chart-svg",
    viewBox: "0 0 720 250",
    role: "img",
    "aria-label": "Career role, project and task activity over time",
  });
  const values = dates.map((date) => {
    const key = monthly
      ? `${date.getUTCFullYear()}-${date.getUTCMonth()}`
      : String(date.getUTCFullYear());
    return (
      bins.get(key) ??
      Object.fromEntries(EVENT_SERIES.map(({ type }) => [type, 0]))
    );
  });
  const maximum = Math.max(
    1,
    ...values.map((bin) =>
      EVENT_SERIES.reduce((total, series) => total + bin[series.type], 0),
    ),
  );
  const left = 42;
  const top = 12;
  const plotWidth = 664;
  const plotHeight = 172;
  const groupWidth = plotWidth / Math.max(1, dates.length);
  const barWidth = Math.max(
    1,
    Math.min(18, (groupWidth * 0.72) / EVENT_SERIES.length),
  );

  for (let tick = 0; tick <= 4; tick += 1) {
    const y = top + plotHeight - (plotHeight * tick) / 4;
    svg.append(
      svgElement("line", {
        x1: left,
        x2: left + plotWidth,
        y1: y,
        y2: y,
        class: "career-chart-grid",
      }),
    );
    addText(
      svg,
      String(Math.round((maximum * tick) / 4)),
      left - 8,
      y + 4,
      "career-chart-axis",
      { "text-anchor": "end" },
    );
  }

  dates.forEach((date, index) => {
    const xCenter = left + groupWidth * (index + 0.5);
    let offset = -((EVENT_SERIES.length * barWidth) / 2);
    for (const series of EVENT_SERIES) {
      const count = values[index][series.type];
      const height = (count / maximum) * plotHeight;
      const bar = svgElement("rect", {
        x: xCenter + offset,
        y: top + plotHeight - height,
        width: Math.max(0.5, barWidth - 1),
        height,
        rx: 2,
        fill: series.color,
        class: "career-chart-bar",
      });
      const title = svgElement("title");
      title.textContent = `${formatTick(date, monthly)} · ${series.label}: ${count}`;
      bar.append(title);
      svg.append(bar);
      offset += barWidth;
    }

    const labelStep = Math.max(1, Math.ceil(dates.length / 12));
    if (index % labelStep === 0 || index === dates.length - 1) {
      addText(
        svg,
        formatTick(date, monthly),
        xCenter,
        207,
        "career-chart-axis",
        { "text-anchor": "middle" },
      );
    }
  });

  const legend = document.createElement("ul");
  legend.className = "career-chart-legend u-unstyled-list";
  for (const series of EVENT_SERIES) {
    const item = document.createElement("li");
    const swatch = document.createElement("span");
    swatch.className = "career-chart-legend__swatch";
    swatch.style.backgroundColor = series.color;
    swatch.setAttribute("aria-hidden", "true");
    item.append(swatch, document.createTextNode(series.label));
    legend.append(item);
  }

  container.replaceChildren(svg, legend);
}

function buildExperienceChart(container, roles, range) {
  const visibleRoles = roles
    .filter((role) => overlapsRange(role.startDate, role.endDate, range))
    .sort((a, b) => a.startDate.localeCompare(b.startDate));
  if (!visibleRoles.length) {
    container.textContent = "No roles overlap this period.";
    return;
  }

  const width = 920;
  const left = 270;
  const plotWidth = width - left - 18;
  const rowHeight = 36;
  const height = Math.max(130, visibleRoles.length * rowHeight + 42);
  const svg = svgElement("svg", {
    class: "career-chart-svg career-chart-svg--timeline",
    viewBox: `0 0 ${width} ${height}`,
    role: "img",
    "aria-label": "Timeline of roles overlapping the selected period",
  });
  const rangeStart = range.start.getTime();
  const rangeDuration = Math.max(1, range.end.getTime() - rangeStart);
  const xFor = (date) =>
    left + ((date.getTime() - rangeStart) / rangeDuration) * plotWidth;

  for (let tick = 0; tick <= 4; tick += 1) {
    const date = new Date(rangeStart + (rangeDuration * tick) / 4);
    const x = left + (plotWidth * tick) / 4;
    svg.append(
      svgElement("line", {
        x1: x,
        x2: x,
        y1: 16,
        y2: height - 20,
        class: "career-chart-grid",
      }),
    );
    addText(svg, formatTick(date, false), x, 12, "career-chart-axis", {
      "text-anchor": "middle",
    });
  }

  visibleRoles.forEach((role, index) => {
    const y = 30 + index * rowHeight;
    const start = parseDate(role.startDate);
    const end = parseDate(role.endDate) ?? new Date();
    const clippedStart = new Date(
      Math.max(start.getTime(), range.start.getTime()),
    );
    const clippedEnd = new Date(Math.min(end.getTime(), range.end.getTime()));
    const company = role.company ?? "Unknown company";
    const position = role.position ?? "Role";
    const label = `${position} · ${company}`;
    const labelElement = addText(
      svg,
      label,
      0,
      y + 13,
      "career-chart-role-label",
    );
    const title = svgElement("title");
    title.textContent = `${label} (${role.startDate} – ${role.endDate ?? "Present"})`;
    labelElement.append(title);

    const bar = svgElement("rect", {
      x: xFor(clippedStart),
      y,
      width: Math.max(2, xFor(clippedEnd) - xFor(clippedStart)),
      height: 20,
      rx: 5,
      fill: COMPANY_COLORS[index % COMPANY_COLORS.length],
      class: "career-chart-bar",
    });
    const barTitle = svgElement("title");
    barTitle.textContent = `${label}: ${role.startDate} – ${role.endDate ?? "Present"}`;
    bar.append(barTitle);
    svg.append(bar);
  });

  container.replaceChildren(svg);
}

function buildSkillsChart(container, roles, range) {
  const counts = new Map();
  for (const role of roles) {
    if (!overlapsRange(role.startDate, role.endDate, range)) {
      continue;
    }
    for (const skill of role.skills ?? []) {
      counts.set(skill, (counts.get(skill) ?? 0) + 1);
    }
  }

  const skills = [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 10);
  if (!skills.length) {
    container.textContent = "No skills are recorded for roles in this period.";
    return;
  }

  const maximum = skills[0][1];
  const list = document.createElement("ol");
  list.className = "career-skills-chart u-unstyled-list";
  for (const [name, count] of skills) {
    const item = document.createElement("li");
    const label = document.createElement("span");
    label.className = "career-skills-chart__label";
    label.textContent = name;
    const track = document.createElement("span");
    track.className = "career-skills-chart__track";
    track.setAttribute("role", "progressbar");
    track.setAttribute("aria-label", `${name}: ${count} roles`);
    track.setAttribute("aria-valuemin", "0");
    track.setAttribute("aria-valuemax", String(maximum));
    track.setAttribute("aria-valuenow", String(count));
    const bar = document.createElement("span");
    bar.className = "career-skills-chart__bar";
    bar.style.width = `${(count / maximum) * 100}%`;
    track.append(bar);
    const value = document.createElement("span");
    value.className = "career-skills-chart__count";
    value.textContent = String(count);
    item.append(label, track, value);
    list.append(item);
  }
  container.replaceChildren(list);
}

function buildStats(container, events, roles, projects, range) {
  const roleCount = roles.filter((role) =>
    overlapsRange(role.startDate, role.endDate, range),
  ).length;
  const projectCount = projects.filter((project) =>
    overlapsRange(project.startDate, project.completedDate, range),
  ).length;
  const taskCount = events.filter(
    (event) =>
      event.type === "TASK_COMPLETED" && isWithinRange(eventDate(event), range),
  ).length;
  const eventCount = events.filter((event) =>
    isWithinRange(eventDate(event), range),
  ).length;
  const values = [
    ["Roles", roleCount],
    ["Projects", projectCount],
    ["Tasks completed", taskCount],
    ["Events", eventCount],
  ];
  const list = document.createElement("ul");
  list.className = "career-dashboard__stats u-unstyled-list";
  for (const [label, value] of values) {
    const item = document.createElement("li");
    const count = document.createElement("strong");
    count.textContent = String(value);
    const name = document.createElement("span");
    name.textContent = label;
    item.append(count, name);
    list.append(item);
  }
  container.replaceChildren(...list.childNodes);
}

function createEventItem(event) {
  const item = document.createElement("li");
  item.className = "career-events__item";
  item.dataset.eventType = event.type;
  const meta = document.createElement("p");
  meta.className = "career-events__meta";
  const type = document.createElement("span");
  type.className = "tag tag--inline";
  type.textContent = event.type;
  const time = document.createElement("time");
  time.dateTime = event.timestamp;
  time.textContent = event.timestamp;
  const data = document.createElement("pre");
  data.className = "career-events__data";
  data.textContent = JSON.stringify(event, null, 2);
  meta.append(type, time);
  item.append(meta, data);
  return item;
}

document.querySelectorAll("[data-career-dashboard]").forEach((dashboard) => {
  const status = dashboard.querySelector("[data-update-status]");
  const stats = dashboard.querySelector("[data-career-stats]");
  const activityChart = dashboard.querySelector("[data-activity-chart]");
  const experienceChart = dashboard.querySelector("[data-experience-chart]");
  const skillsChart = dashboard.querySelector("[data-skills-chart]");
  const eventList = dashboard.querySelector("[data-career-events]");
  const eventFilter = dashboard.querySelector(".career-events-filter");
  const dateRange = dashboard.querySelector("[data-date-range]");
  const rangeLabel = dashboard.querySelector("[data-range-label]");
  const rangeMinimum = dashboard.querySelector("[data-range-minimum]");
  let events = [];
  let range = null;
  let refreshInProgress = false;

  function updateDateRangeControl() {
    const bounds = getDateBounds(events);
    const selectedOffset = Math.max(
      0,
      Math.min(
        bounds.monthCount,
        (range.end.getUTCFullYear() - bounds.start.getUTCFullYear()) * 12 +
          range.end.getUTCMonth() -
          bounds.start.getUTCMonth(),
      ),
    );
    const selectedEnd = new Date(
      Date.UTC(
        bounds.start.getUTCFullYear(),
        bounds.start.getUTCMonth() + selectedOffset,
        1,
      ),
    );
    range.start = bounds.start;
    range.end =
      selectedOffset === bounds.monthCount
        ? endOfToday()
        : endOfMonth(selectedEnd);
    dateRange.min = "0";
    dateRange.max = String(bounds.monthCount);
    dateRange.value = String(selectedOffset);
    dateRange.disabled = bounds.monthCount === 0;
    dateRange.setAttribute("aria-valuetext", formatMonth(selectedEnd));
    rangeLabel.textContent = `From ${formatMonth(bounds.start)} to ${formatMonth(selectedEnd)}`;
    rangeMinimum.textContent = formatMonth(bounds.start);
  }

  function render() {
    const { roles, projects } = replayEvents(events);
    buildStats(stats, events, roles, projects, range);
    buildActivityChart(activityChart, events, range);
    buildExperienceChart(experienceChart, roles, range);
    buildSkillsChart(skillsChart, roles, range);

    const selectedTypes = new Set(
      [...eventFilter.querySelectorAll('input[name="eventType"]:checked')].map(
        (input) => input.value,
      ),
    );
    const visibleEvents = events.filter((event) => {
      const date = eventDate(event);
      return isWithinRange(date, range) && selectedTypes.has(event.type);
    });
    eventList.replaceChildren(...visibleEvents.map(createEventItem));
  }

  function setRange(nextRange) {
    range = nextRange;
    updateDateRangeControl();
    render();
  }

  dateRange.addEventListener("input", () => {
    const bounds = getDateBounds(events);
    const selectedOffset = Number(dateRange.value);
    const selectedEnd = new Date(
      Date.UTC(
        bounds.start.getUTCFullYear(),
        bounds.start.getUTCMonth() + selectedOffset,
        1,
      ),
    );
    const end =
      selectedOffset === bounds.monthCount
        ? endOfToday()
        : endOfMonth(selectedEnd);
    setRange({ start: bounds.start, end, preset: "slider" });
  });

  eventFilter.addEventListener("change", (event) => {
    if (event.target.matches('input[name="eventType"]')) {
      render();
    }
  });

  async function refreshEvents() {
    if (refreshInProgress) {
      return;
    }
    refreshInProgress = true;
    try {
      const response = await fetch(`/career.json?refresh=${Date.now()}`, {
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`Career feed returned HTTP ${response.status}`);
      }
      const data = await response.json();
      if (!data || !Array.isArray(data.events)) {
        throw new Error("Career feed does not contain an events array");
      }
      events = data.events.filter(
        (event) =>
          event &&
          typeof event.type === "string" &&
          typeof event.timestamp === "string",
      );
      if (!range) {
        range = getInitialRange(events);
      } else if (range.preset === "all") {
        range = getInitialRange(events);
      }
      updateDateRangeControl();
      render();
      status.textContent = `Updated ${new Date().toLocaleTimeString()} · ${events.length} source events · refreshes every minute`;
    } catch (error) {
      console.error("Unable to refresh career event data.", error);
      status.textContent = `Career data refresh failed: ${error.message}`;
    } finally {
      refreshInProgress = false;
    }
  }

  refreshEvents();
  window.setInterval(refreshEvents, REFRESH_INTERVAL);
});
