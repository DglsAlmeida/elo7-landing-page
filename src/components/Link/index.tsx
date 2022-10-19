import { CaretDoubleRight } from "phosphor-react";
import { LinkProps } from "./interfaces";
import styles from "./link.module.scss";

export const Link = ({
  text,
  withSeparator,
  withArrow,
  ...rest
}: LinkProps) => {
  return (
    <>
      {withSeparator && <div className={styles?.separator} />}
      <a className={styles?.link} {...rest}>
        {text}
        {withArrow && <CaretDoubleRight size={14} />}
      </a>
    </>
  );
};
