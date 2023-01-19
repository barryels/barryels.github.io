import { EventLogEntry } from "../../global/types";
import {
  getEventLogEntriesGroupedByYear,
  EventLogEntriesPerYear,
} from "../../global/dataStore";
import utilityStyles from "./../Global/index.module.css";
import styles from "./index.module.css";
import RoleAtCompanyUpdated from "./RoleAtCompanyUpdated";

type Props = {
  isReverseChrononogicalOrder?: boolean;
};

function mapSupportedEventLogEntryToComponent(eventLogEntry: EventLogEntry) {
  switch (eventLogEntry.type) {
    case "ROLE_AT_COMPANY_UPDATED":
      return (
        <RoleAtCompanyUpdated
          key={eventLogEntry.id}
          eventLogEntry={eventLogEntry}
        />
      );
    default:
      return null;
  }
}

export default function EventLogTimeline({
  isReverseChrononogicalOrder = false,
}: Props) {
  let eventLogEntriesGroupedByYear = getEventLogEntriesGroupedByYear();

  if (isReverseChrononogicalOrder) {
    eventLogEntriesGroupedByYear = getEventLogEntriesGroupedByYear()
      .slice()
      .reverse()
      .map((item) => {
        item.events.reverse();
        return item;
      });
  }

  return (
    <div className={styles.root}>
      {eventLogEntriesGroupedByYear.map((item: EventLogEntriesPerYear) => {
        return (
          <section
            key={item.year}
            className={`${styles.yearGroup} ${utilityStyles.spaceVerticallyLarge}`}
          >
            <h2 className={styles.yearGroupTitle}>{item.year}</h2>
            {item.events.map((eventLogEntry: EventLogEntry) => {
              return mapSupportedEventLogEntryToComponent(eventLogEntry);
            })}
          </section>
        );
      })}
    </div>
  );
}
