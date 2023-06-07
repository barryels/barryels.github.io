import styles from "./index.module.css";

interface ProgressBarProps {
  value: number;
}

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <progress className={styles.root} max="100" value={props.value}></progress>
  );
}
