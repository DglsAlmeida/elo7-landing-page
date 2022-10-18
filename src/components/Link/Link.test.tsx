import { render, screen } from "@testing-library/react";
import { Link } from ".";
import { LinkProps } from "./interfaces";

describe("<Link />", () => {
  it("should render the Link component correctly", () => {
    const linkProps: LinkProps = {
      href: "#",
      text: "VAGAS",
    };

    render(<Link {...linkProps} />);

    const link = screen.getByRole("link", { name: /VAGAS/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "#");
  });
});
