import styles from "./banner.module.scss";

export const Banner = () => {
  return (
    <section className={styles?.bannerContainer}>
      <img src="/images/foto-bottom.png" alt="Banner with Employees" />
    </section>
  );
};
