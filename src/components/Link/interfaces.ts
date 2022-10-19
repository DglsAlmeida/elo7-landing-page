import { AnchorHTMLAttributes } from "react";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  withSeparator?: boolean;
  withArrow?: boolean;
}
