import { render, screen } from "@testing-library/react";
import { CompanySummary } from ".";

describe("<CompanySumary />", () => {
  it("should render the CompanySumary component correctly", () => {
    render(<CompanySummary />);

    expect(screen.getByText(/PALAVRA DO CEO/i)).toBeInTheDocument();
    expect(screen.getByText(/Carlos Curioni/i)).toBeInTheDocument();
    expect(
      screen.getByText(/CONHEÇA NOSSO TIME FORA DE SÉRIE/i)
    ).toBeInTheDocument();
  });
});
