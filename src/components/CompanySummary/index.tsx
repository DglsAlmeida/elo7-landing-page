import constants from "../../constants";
import { Carousel } from "../Carousel";
import styles from "./companySummary.module.scss";

export const CompanySummary = () => {
  const { COMPANY_SUMMARY } = constants;

  return (
    <main className={styles?.mainContainer}>
      <div className={styles?.mainContent}>
        <div className={styles?.mainContentTitle}>
          <span className={styles?.ceoWords}>{COMPANY_SUMMARY.title}</span>
          <span className={styles?.ceoName}>{COMPANY_SUMMARY.ceoName}</span>
          <p>{COMPANY_SUMMARY.paragrahp}</p>
        </div>
        <img src="/images/placeholder-video.png" alt="CEO's words" />
      </div>

      <div className={styles?.employeesContainer}>
        <h3>{COMPANY_SUMMARY.subtitle}</h3>
        <Carousel />
      </div>
    </main>
  );
};
