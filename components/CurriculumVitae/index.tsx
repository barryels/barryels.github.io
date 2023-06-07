import { getSiteInfo, getCurrentSkills, Skill } from "../../global/dataStore";
import SkillIndicator from "../SkillIndicator";
import utilityStyles from "./../Global/index.module.css";
import styles from "./index.module.css";

export default function CurriculumVitae() {
  const siteInfo = getSiteInfo();

  return (
    <article className={`${styles.root} ${utilityStyles.spaceVerticallyLarge}`}>
      <header className={`${styles.header}`}>
        <div className={styles.headerTitle}>
          <h1>
            <span>{siteInfo.fullName}</span>
          </h1>
          <span>{siteInfo.currentPosition}</span>
        </div>

        <div className={styles.headerSummary}>
          <p>{siteInfo.about}</p>
        </div>
      </header>

      <div className={`${styles.main}`}>
        <section>
          <h2>Experience</h2>
        </section>

        <section>
          <h2>Education</h2>
        </section>
      </div>

      <aside className={styles.aside}>
        <section>
          <h2>Strengths</h2>
        </section>

        <section>
          <h2>Domains</h2>
        </section>

        <section>
          <h2>Expertise</h2>
          <ul
            className={`${utilityStyles.resetListStyles} ${utilityStyles.spaceVerticallyLarge}`}
          >
            {getCurrentSkills().map((skill: Skill, index: number) => {
              return (
                <li key={index}>
                  <SkillIndicator name={skill.name} value={skill.level} />
                </li>
              );
            })}
          </ul>
        </section>
      </aside>
    </article>
  );
}
