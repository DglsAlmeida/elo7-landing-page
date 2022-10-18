import { render, screen } from "@testing-library/react";
import { Banner } from ".";

describe("<Banner>", () => {
  it("should render Banner component and img correctly", () => {
    render(<Banner />);
    const imgs = screen.getByRole("img");
    expect(imgs).toHaveAttribute("alt", "Banner with Employees");
  });
});
