import constants from "../../constants";
import companyValuesMock from "../../mocks/companyValuesMock";
import { CompanyValuesCard } from "../CompanyValuesCard";
import { Link } from "../Link";
import styles from "./companyValues.module.scss";

export const CompanyValues = () => {
  const { COMPANY_VALUES } = constants;

  return (
    <main className={styles?.mainContainer}>
      <div className={styles?.companyValuesContent}>
        {Object.values(companyValuesMock).map(
          ({ id, src, text, title, alt }) => (
            <CompanyValuesCard
              key={id}
              src={src}
              title={title}
              alt={alt}
              text={text}
            />
          )
        )}
      </div>
      <Link href="#" text={COMPANY_VALUES.link} withSeparator />
    </main>
  );
};
