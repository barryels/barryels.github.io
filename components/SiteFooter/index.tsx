import { getSiteInfo } from "../../global/dataStore";
import utilityStyles from "./../Global/index.module.css";
import styles from "./index.module.css";

export default function SiteFooter() {
  const siteInfo = getSiteInfo();

  return (
    <footer className={`${styles.root} ${utilityStyles.spaceVertically}`}>
      <ul className={`${utilityStyles.resetListStyles}`}>
        {siteInfo.links.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.url} rel="noreferrer" target="_blank">
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
