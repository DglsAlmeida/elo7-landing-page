import { Carousel } from "../Carousel";
import styles from "./companySummary.module.scss";

export const CompanySummary = () => {
  return (
    <main className={styles?.mainContainer}>
      <div className={styles?.mainContent}>
        <span className={styles?.ceoWords}>PALAVRA DO CEO</span>
        <span className={styles?.ceoName}>Carlos Curioni</span>
        <img src="/images/placeholder-video.png" alt="CEO's words" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, Quisque ut
          efficitur ex, at malesuada ligula, Pellentesque odio ipsum, viverra a
          eros sit amet, fringilla sagittis augue, Fusque risus tellus, tempus
          quis lacinia in, vehicula ut turpis.
        </p>
      </div>

      <div className={styles?.employeesContainer}>
        <h3>CONHEÇA NOSSO TIME FORA DE SÉRIE</h3>
        <Carousel />
      </div>
    </main>
  );
};
