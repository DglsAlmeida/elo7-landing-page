import { render, screen } from "@testing-library/react";
import { CompanyValuesCard } from ".";
import { CompanyValuesCardProps } from "./interfaces";

describe("<CompanyValueCard />", () => {
  it("should render the CompanyValueCard component correctly", () => {
    const companyValueCardProps: CompanyValuesCardProps = {
      src: "/images/descontracao.png",
      alt: "alt",
      title: "test",
      text: "hello world",
    };

    render(<CompanyValuesCard {...companyValueCardProps} />);

    const companyValueCard = screen.getByText("test");

    expect(companyValueCard).toBeInTheDocument();
  });
});
