import { useEffect, useState } from "react";
import constants from "../../constants";
import { useResponsive } from "../../hooks/useResponsive";
import { getOpenPositions } from "../../services/getOpenPositions";
import { Link } from "../Link";
import styles from "./footer.module.scss";
import { Location, OpenPositionData } from "./interfaces";

export const Footer = () => {
  const [openPositions, setOpenPositions] = useState<OpenPositionData[]>([]);
  const { isMobile } = useResponsive();
  const { FOOTER } = constants;

  const location = (localizacao: Location) => {
    if (!isMobile && localizacao.cidade) {
      return (
        <>
          <span>
            {localizacao.cidade} - {localizacao.bairro}, {localizacao.pais}
          </span>
        </>
      );
    }

    if (!isMobile && !localizacao.cidade) {
      return (
        <>
          <span>{localizacao}</span>
        </>
      );
    }
  };

  useEffect(() => {
    (async () => {
      const response = await getOpenPositions();

      const filteredPositions = response.vagas
        .filter((position: OpenPositionData) => position.ativa ?? position)
        .map((position: OpenPositionData) => {
          return {
            ...position,
            localizacao: !position.localizacao
              ? "Remota"
              : position.localizacao,
          };
        });

      setOpenPositions(filteredPositions);
    })();
  }, []);

  return (
    <footer className={styles?.footerContainer}>
      <h3>{FOOTER.title}</h3>
      <span className={styles?.footerSubtitle}>{FOOTER.subtitle}</span>

      {openPositions.map((position, positionIdx) => (
        <div key={positionIdx} className={styles.positionContent}>
          <Link href={position.link} text={position.cargo} />
          {location(position.localizacao)}
        </div>
      ))}
    </footer>
  );
};
