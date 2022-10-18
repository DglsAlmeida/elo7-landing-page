import { render, screen } from "@testing-library/react";
import { Carousel } from ".";

describe("<Carousel>", () => {
  it("should render Carousel component and img correctly", () => {
    render(<Carousel />);
    const imgs = screen.getAllByRole("img");
    expect(imgs.length).toBe(4);
  });
});
