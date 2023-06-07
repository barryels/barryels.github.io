import { getSiteInfo } from "../../global/dataStore";
import utilityStyles from "./../Global/index.module.css";
import styles from "./index.module.css";
import PersonAvatar from "../PersonAvatar";

export default function SiteIntro() {
  const siteInfo = getSiteInfo();

  return (
    <div className={`${styles.root} ${utilityStyles.spaceVertically}`}>
      <h1 className={styles.title}>{siteInfo.fullName}</h1>

      <div style={{ textAlign: "center" }}>
        <PersonAvatar fullName={siteInfo.fullName} />
      </div>

      <section className={utilityStyles.spaceVertically}>
        <p>{siteInfo.about}</p>
      </section>
    </div>
  );
}
