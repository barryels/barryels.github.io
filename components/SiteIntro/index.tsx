import { getSiteInfo } from "../../global/dataStore";
import utilityStyles from "./../Global/index.module.css";
import styles from "./index.module.css";

export default function SiteIntro() {
  const siteInfo = getSiteInfo();

  return (
    <div className={`${styles.root} ${utilityStyles.spaceVertically}`}>
      <h1>{siteInfo.fullName}</h1>

      <section className={utilityStyles.spaceVertically}>
        <p>{siteInfo.about}</p>

        <h2>Career highlights include:</h2>
        <ul>
          {siteInfo.careerHighlights.map((careerHighlight, index) => {
            return <li key={index}>{careerHighlight.description}</li>;
          })}
        </ul>
      </section>
    </div>
  );
}
