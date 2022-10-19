import { render, screen } from "@testing-library/react";
import { Footer } from ".";
import { api } from "../../services/api";

describe("<Footer />", () => {
  it("should render the Header component correctly", async () => {
    const responseData = {
      vagas: [
        {
          cargo: "Desenvolvedor Mobile Senior (Android e iOS)",
          ativa: true,
          link: "http://elo7.dev/vaga/desenvolvedor-mobile-senior",
          localizacao: {
            bairro: "Vila Olímpia",
            cidade: "São Paulo",
            pais: "Brasil",
          },
        },
        {
          cargo: "Desenvolvedor Mobile Junior (Android)",
          ativa: false,
          link: "http://elo7.dev/vaga/desenvolvedor-mobile-junior",
          localizacao: {
            bairro: "Vila Olímpia",
            cidade: "São Paulo",
            pais: "Brasil",
          },
        },
      ],
    };

    jest.spyOn(api, "get").mockResolvedValueOnce({
      data: {
        ...responseData,
      },
    } as any);

    render(<Footer />);
    expect(screen.getByText(/VAGAS ABERTAS/i)).toBeInTheDocument();
    expect(screen.getByText(/DESENVOLVIMENTO/i)).toBeInTheDocument();
  });
});
