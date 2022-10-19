import constants from "../../constants";
import { Link } from "../Link";
import styles from "./header.module.scss";

export const Header = () => {
  const { HEADER } = constants;

  return (
    <header className={styles?.headerContainer}>
      <div className={styles?.imgContainer}>
        <img src="/images/foto-header.png" alt="Elo7 Employees" />
        <span>{HEADER.title}</span>
      </div>

      <div className={styles?.headerContent}>
        <p>{HEADER.paragrahp}</p>
        <Link href="#" text={HEADER.openPositions} withSeparator withArrow />
      </div>
    </header>
  );
};
