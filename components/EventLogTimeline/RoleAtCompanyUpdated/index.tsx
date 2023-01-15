import { EventLogEntry } from "../../../global/dataStore";
import styles from "./index.module.css";

type Props = {
  event: EventLogEntry;
};

export default function RoleAtCompanyUpdated({ event }: Props) {
  return (
    <article className={styles.root} key={event.id}>
      <h3>{event.data.position}</h3>
      <h4>{event.data.companyName}</h4>
      <strong>{event.data.dateFormatted}</strong>
      <ul>
        {event.data.skills.map((skillName, index) => {
          return <li key={index}>{skillName}</li>;
        })}
      </ul>
    </article>
  );
}
