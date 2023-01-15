import { getSiteInfo } from "../../global/dataStore";
import Image from "next/image";
import utilityStyles from "./../Global/index.module.css";
import styles from "./index.module.css";

export default function SiteIntro() {
  const siteInfo = getSiteInfo();

  return (
    <div className={`${styles.root} ${utilityStyles.spaceVertically}`}>
      <h1 className={styles.title}>{siteInfo.fullName}</h1>

      <div className={styles.avatarContainer}>
        <Image
          className={styles.avatar}
          src="/me.png"
          alt={siteInfo.fullName}
          width={128}
          height={128}
        />
      </div>

      <section className={utilityStyles.spaceVertically}>
        <p>{siteInfo.about}</p>

        <h2>Career Highlights</h2>
        <ul>
          {siteInfo.careerHighlights.map((careerHighlight, index) => {
            return <li key={index}>{careerHighlight.description}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}
