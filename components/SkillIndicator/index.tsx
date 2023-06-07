import ProgressBar from "./../ProgressBar";
import styles from "./index.module.css";

interface SkillIndicatorProps {
  name: string;
  value: number;
}

export default function SkillIndicator(props: SkillIndicatorProps) {
  const valueAsPercentage = (props.value / 5) * 100;

  return (
    <div className={styles.root}>
      <span>{props.name}</span>
      <ProgressBar value={valueAsPercentage} />
    </div>
  );
}
