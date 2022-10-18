import { CompanyValues } from "./components/ CompanyValues";
import { Banner } from "./components/Banner";
import { CompanySummary } from "./components/CompanySummary";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./styles/global.scss";

const App = () => {
  return (
    <>
      <Header />
      <CompanySummary />
      <CompanyValues />
      <Banner />
      <Footer />
    </>
  );
};

export default App;
