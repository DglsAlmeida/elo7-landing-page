import constants from "../../constants";
import { CompanyValuesCard } from "../CompanyValuesCard";
import { Link } from "../Link";
import styles from "./companyValues.module.scss";

const { COMPANY_VALUES } = constants;

const companyValuesData = {
  qualityOfLife: {
    id: 1,
    src: "/images/qualidade.png",
    alt: "quality Of Life",
    title: COMPANY_VALUES.qualityOfLife.title,
    text: COMPANY_VALUES.qualityOfLife.text,
  },
  relaxedAtmosphere: {
    id: 2,
    src: "/images/descontracao.png",
    alt: "relaxed Atmosphere",
    title: COMPANY_VALUES.relaxedAtmosphere.title,
    text: COMPANY_VALUES.relaxedAtmosphere.text,
  },
  extraActivities: {
    id: 3,
    src: "/images/atividades.png",
    alt: "extra Activities",
    title: COMPANY_VALUES.extraActivities.title,
    text: COMPANY_VALUES.extraActivities.text,
  },
};

export const CompanyValues = () => {
  return (
    <main className={styles?.companyValuesContainer}>
      {Object.values(companyValuesData).map(({ id, src, text, title, alt }) => (
        <CompanyValuesCard
          key={id}
          src={src}
          title={title}
          alt={alt}
          text={text}
        />
      ))}

      <Link href="#" text={COMPANY_VALUES.link} withSeparator />
    </main>
  );
};
