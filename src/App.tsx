import { CompanyValues } from "./components/ CompanyValues";
import { Banner } from "./components/Banner";
import { CompanySummary } from "./components/CompanySummary";
import { Header } from "./components/Header";
import "./styles/global.scss";

const App = () => {
  return (
    <>
      <Header />
      <CompanySummary />
      <CompanyValues />
      <Banner />
    </>
  );
};

export default App;
