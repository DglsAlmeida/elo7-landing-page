import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles?.headerContainer}>
      <div className={styles?.imgContainer}>
        <img src="/images/foto-header.png" alt="Elo7 Employees" />
        <span>Trabalhe no elo7</span>
      </div>

      <div className={styles?.headerContent}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, Quisque ut
          efficitur ex, at malesuada ligula, Pellentesque odio ipsum, viverra a
          eros sit amet, fringilla sagittis augue, Fusque risus tellus, tempus
          quis lacinia in, vehicula ut turpis
        </p>
        <a href="#">VAGAS EM ABERTO</a>
      </div>
    </header>
  );
};
