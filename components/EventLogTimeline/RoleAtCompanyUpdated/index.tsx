import { EventLogEntry } from "../../../global/dataStore";
import styles from "./index.module.css";

type Props = {
  event: EventLogEntry;
};

export default function RoleAtCompanyUpdated({ event }: Props) {
  return (
    <article className={styles.root} key={event.id}>
      <h3>
        {event.data.position} @ {event.data.companyName}
      </h3>
      <strong>{event.data.dateFormatted}</strong>
    </article>
  );
}
