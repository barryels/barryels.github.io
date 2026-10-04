function selectedEventTypes(viewer) {
  return new Set(
    [...viewer.querySelectorAll('input[name="eventType"]:checked')].map(
      (input) => input.value,
    ),
  );
}

function applyCareerEventFilter(viewer) {
  const selected = selectedEventTypes(viewer);

  viewer.querySelectorAll("[data-event-type]").forEach((item) => {
    const matches = selected.has(item.dataset.eventType);
    item.classList.toggle("is-collapsed", !matches);
  });
}

document.querySelectorAll("[data-career-events-viewer]").forEach((viewer) => {
  viewer.addEventListener("change", (event) => {
    if (event.target.matches('input[name="eventType"]')) {
      applyCareerEventFilter(viewer);
    }
  });
});
