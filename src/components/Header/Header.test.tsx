import { render, screen } from "@testing-library/react";
import { Header } from ".";

describe("<Header />", () => {
  it("should render the Header component correctly", () => {
    render(<Header />);

    expect(screen.getByText(/trabalhe no elo7/i)).toBeInTheDocument();
    expect(screen.getByText(/VAGAS EM ABERTO/i)).toBeInTheDocument();
  });
});
