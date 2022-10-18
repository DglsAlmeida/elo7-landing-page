import styles from "./companyValuesCard.module.scss";
import { CompanyValuesCardProps } from "./interfaces";

export const CompanyValuesCard = ({
  src,
  title,
  alt,
  text,
}: CompanyValuesCardProps) => {
  return (
    <div className={styles?.companyValuesCardContainer}>
      <img src={src} alt={alt} />
      <span>{title}</span>
      <p>{text}</p>
    </div>
  );
};
