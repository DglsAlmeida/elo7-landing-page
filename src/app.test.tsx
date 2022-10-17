import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("it should render App", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /Boilerplate/i })
    ).toBeInTheDocument();
  });
});
