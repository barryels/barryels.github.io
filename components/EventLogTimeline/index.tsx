import {
  EventLogEntry,
  getEventLogEntriesGroupedByYear,
} from "../../global/dataStore";
import styles from "./index.module.css";

export default function EventLogTimeline() {
  const eventLogEntriesGroupedByYear = getEventLogEntriesGroupedByYear();

  return (
    <div className={styles.root}>
      {Object.keys(eventLogEntriesGroupedByYear).map((year) => {
        const item = eventLogEntriesGroupedByYear[year];
        return (
          <section key={year} className={styles.yearGroup}>
            <h2 className={styles.yearGroupTitle}>{year}</h2>
            {item.events
              .filter((event: EventLogEntry) => {
                return event.type === "JOINED_COMPANY";
              })
              .map((event: EventLogEntry) => {
                return (
                  <article className={styles.joinedCompany} key={event.id}>
                    <h3>
                      {event.data.position} @ {event.data.companyName}
                    </h3>
                    <strong>{event.data.dateFormatted}</strong>
                  </article>
                );
              })}
          </section>
        );
      })}
    </div>
  );
}
