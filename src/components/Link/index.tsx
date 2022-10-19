import { CaretDoubleRight } from "phosphor-react";
import { LinkProps } from "./interfaces";
import styles from "./link.module.scss";

export const Link = ({ href, text, withSeparator, withArrow }: LinkProps) => {
  return (
    <>
      {withSeparator && <div className={styles?.separator} />}
      <a href={href} className={styles?.link}>
        {text}
        {withArrow && <CaretDoubleRight size={14} />}
      </a>
    </>
  );
};
