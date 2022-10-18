import { CompanyValues } from "./components/ CompanyValues";
import { CompanySummary } from "./components/CompanySummary";
import { Header } from "./components/Header";
import "./styles/global.scss";

const App = () => {
  return (
    <>
      <Header />
      <CompanySummary />
      <CompanyValues />
    </>
  );
};

export default App;
