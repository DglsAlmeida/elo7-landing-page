import { render, screen } from "@testing-library/react";
import { CompanyValues } from ".";

describe("<CompanyValues />", () => {
  it("should render the CompanyValues component correctly", () => {
    render(<CompanyValues />);

    const imgs = screen.getAllByRole("img");
    expect(imgs.length).toBe(3);
  });
});
