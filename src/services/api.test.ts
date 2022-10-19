import constants from "../constants";
import apiResponseMock from "../mocks/apiResponse.mock";
import { api } from "./api";
import { getOpenPositions } from "./getOpenPositions";

const { API } = constants;

describe("getOpenPositions", () => {
  it("when API call is successful", async () => {
    const mockedApi = jest.spyOn(api, "get").mockResolvedValueOnce({
      data: {
        ...apiResponseMock,
      },
    } as any);

    const result = await getOpenPositions();

    expect(mockedApi).toHaveBeenCalledTimes(1);
    expect(mockedApi).toHaveBeenCalledWith(API.baseUrl);
    expect(result).toEqual(apiResponseMock);
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
