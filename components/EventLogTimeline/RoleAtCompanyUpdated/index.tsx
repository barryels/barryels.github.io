import { EventLogEntry } from "../../../global/types";
import utilityStyles from "./../../Global/index.module.css";
import styles from "./index.module.css";

type Props = {
  eventLogEntry: EventLogEntry;
};

export default function RoleAtCompanyUpdated({ eventLogEntry }: Props) {
  return (
    <article
      className={`${styles.root} ${utilityStyles.spaceVerticallySmall}`}
      key={eventLogEntry.id}
    >
      <h3>{eventLogEntry.data.position}</h3>
      <h4>{eventLogEntry.data.companyName}</h4>
      <p>
        <strong>
          {new Date(eventLogEntry.data.startDate).toDateString()} -{" "}
          {new Date(eventLogEntry.data.endDate || -1).toDateString()}
        </strong>
      </p>
      <ul>
        {eventLogEntry.data.skills.map((skillName, index) => {
          return <li key={index}>{skillName}</li>;
        })}
      </ul>
    </article>
  );
}
