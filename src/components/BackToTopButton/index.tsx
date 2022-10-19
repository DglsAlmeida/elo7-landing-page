import { ArrowLineUp } from "phosphor-react";
import { useEffect, useState } from "react";
import styles from "./backToTopButton.module.scss";

export const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTopButton && (
        <button className={styles.buttonContainer} onClick={scrollUp}>
          <ArrowLineUp size={24} />
        </button>
      )}
    </>
  );
};
