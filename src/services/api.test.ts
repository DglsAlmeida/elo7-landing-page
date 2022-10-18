import constants from "../constants";
import { api } from "./api";
import { getOpenPositions } from "./getOpenPositions";

const { API } = constants;

describe("getOpenPositions", () => {
  it("when API call is successful", async () => {
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

    const mockedApi = jest.spyOn(api, "get").mockResolvedValueOnce({
      data: {
        ...responseData,
      },
    });

    const result = await getOpenPositions();

    expect(mockedApi).toHaveBeenCalledTimes(1);
    expect(mockedApi).toHaveBeenCalledWith(API.baseUrl);
    expect(result).toEqual(responseData);
  });

  it("should return undefined", async () => {
    const message = "Network Error";

    const mockedApi = jest
      .spyOn(api, "get")
      .mockRejectedValueOnce(new Error(message));

    const result = await getOpenPositions();

    expect(mockedApi).toHaveBeenCalledWith(API.baseUrl);
    expect(result).toEqual(undefined);
  });
});
