import {
  EventLogEntry,
  getEventLogEntriesGroupedByYear,
} from "../../global/dataStore";
import utilityStyles from "./../Global/index.module.css";
import styles from "./index.module.css";
import RoleAtCompanyUpdated from "./RoleAtCompanyUpdated";

export default function EventLogTimeline() {
  const eventLogEntriesGroupedByYear = getEventLogEntriesGroupedByYear();

  return (
    <div className={styles.root}>
      {Object.keys(eventLogEntriesGroupedByYear).map((year) => {
        const item = eventLogEntriesGroupedByYear[year];
        return (
          <section
            key={year}
            className={`${styles.yearGroup} ${utilityStyles.spaceVerticallyLarge}`}
          >
            <h2 className={styles.yearGroupTitle}>{year}</h2>
            {item.events
              .filter((event: EventLogEntry) => {
                return event.type === "ROLE_AT_COMPANY_UPDATED";
              })
              .map((event: EventLogEntry) => {
                return <RoleAtCompanyUpdated key={event.id} event={event} />;
              })}
          </section>
        );
      })}
    </div>
  );
}
