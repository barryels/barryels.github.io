import Image from "next/image";
import styles from "./index.module.css";

interface PersonAvatarProps {
  fullName: string;
}

export default function PersonAvatar(props: PersonAvatarProps) {
  return (
    <div className={styles.root}>
      <Image src="/me.png" alt={props.fullName} width={128} height={128} />
    </div>
  );
}
