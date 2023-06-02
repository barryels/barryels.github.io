import { EventLogEntry } from "../../../global/types";
import utilityStyles from "./../../Global/index.module.css";
import styles from "./index.module.css";

type Props = {
  eventLogEntry: EventLogEntry;
};

export default function RoleAtCompanyUpdated({ eventLogEntry }: Props) {
  const startDate = new Date(eventLogEntry.data.startDate).toDateString();
  const endDate = eventLogEntry.data.endDate
    ? new Date(eventLogEntry.data.endDate).toDateString()
    : "Present";
  const formattedDuration = `${startDate} - ${endDate}`;

  return (
    <article
      className={`${styles.root} ${utilityStyles.spaceVerticallySmall}`}
      key={eventLogEntry.id}
    >
      <h3>{eventLogEntry.data.position}</h3>
      <h4>{eventLogEntry.data.companyName}</h4>
      <p>
        <strong>{formattedDuration}</strong>
      </p>
      <ul>
        {eventLogEntry.data.skills.map((skillName, index) => {
          return <li key={index}>{skillName}</li>;
        })}
      </ul>
    </article>
  );
}
