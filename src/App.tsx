import { BackToTopButton } from "./components/BackToTopButton";
import { Banner } from "./components/Banner";
import { CompanySummary } from "./components/CompanySummary";
import { CompanyValues } from "./components/CompanyValues";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import styles from "./styles/app.module.scss";
import "./styles/global.scss";

const App = () => {
  return (
    <div className={styles?.appContainer}>
      <Header />
      <CompanySummary />
      <CompanyValues />
      <Banner />
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default App;
