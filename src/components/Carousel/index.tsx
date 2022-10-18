import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import employeesImgsMock from "../../mocks/employeesImgsMock";
import styles from "./carousel.module.scss";

export const Carousel = () => {
  const carouselRef = useRef<any>();
  const [currentWidth, setCurrentWidth] = useState(0);

  useEffect(() => {
    if (
      carouselRef?.current?.scrollWidth &&
      carouselRef?.current?.offsetWidth
    ) {
      setCurrentWidth(
        carouselRef?.current?.scrollWidth - carouselRef?.current?.offsetWidth
      );
    }
  }, []);

  return (
    <div className={styles?.carouselContainer}>
      <motion.div
        ref={carouselRef}
        className={styles?.carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={styles?.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -currentWidth }}
        >
          {Object.entries(employeesImgsMock).map(([key, value]) => (
            <motion.div key={key} className={styles?.item}>
              <img
                data-testid="Employee Image"
                src={value}
                alt="Employee Image"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
