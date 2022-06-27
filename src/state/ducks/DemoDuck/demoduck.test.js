import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import DemoDuck from "./demoduck";

describe("demo testing", () => {
  test("testing snapshot for DemoDuck Component", () => {
    const component = renderer.create(<DemoDuck />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("testing DemoDuck Component", () => {
    render(<DemoDuck />);
    const textElement = screen.getByText(/This is demo-duck/i);
    expect(textElement).toBeInTheDocument();
  });
});
