import { useEffect, useState } from "react";
import { getOpenPositions } from "../../services/getOpenPositions";
import { Link } from "../Link";
import styles from "./footer.module.scss";
import { OpenPositionData } from "./interfaces";

export const Footer = () => {
  const [openPositions, setOpenPositions] = useState<OpenPositionData[]>([]);

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
      <h3>VAGAS ABERTAS</h3>
      <span>DESENVOLVIMENTO</span>
      {openPositions.map((position, positionIdx) => (
        <div key={positionIdx}>
          <Link href={position.link} text={position.cargo} />
        </div>
      ))}
    </footer>
  );
};
