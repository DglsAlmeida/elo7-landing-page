import { render, screen } from "@testing-library/react";
import { Footer } from ".";
import apiResponseMock from "../../mocks/apiResponseMock";
import { api } from "../../services/api";

describe("<Footer />", () => {
  it("should render the Header component correctly", async () => {
    jest.spyOn(api, "get").mockResolvedValueOnce({
      data: {
        ...apiResponseMock,
      },
    } as any);

    render(<Footer />);
    expect(screen.getByText(/VAGAS ABERTAS/i)).toBeInTheDocument();
    expect(screen.getByText(/DESENVOLVIMENTO/i)).toBeInTheDocument();
  });
});
