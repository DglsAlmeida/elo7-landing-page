import constants from "../../constants";
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
        <a href="#">{HEADER.openPositions}</a>
      </div>
    </header>
  );
};
