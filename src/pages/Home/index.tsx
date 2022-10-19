import { BackToTopButton } from "../../components/BackToTopButton";
import { Banner } from "../../components/Banner";
import { CompanySummary } from "../../components/CompanySummary";
import { CompanyValues } from "../../components/CompanyValues";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import styles from "./home.module.scss";

export const Home = () => {
  return (
    <main className={styles?.homeContainer}>
      <Header />
      <CompanySummary />
      <CompanyValues />
      <Banner />
      <Footer />
      <BackToTopButton />
    </main>
  );
};
