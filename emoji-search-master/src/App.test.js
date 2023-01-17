import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders header correctly", () => {
  render(<App />);
  const expectedHeaderText = screen.getByText("Emoji Search");
  expect(expectedHeaderText).toBeTruthy();
});

it("renders emoji list correctly on initial load", () => {
  render(<App />);
  const expectedEmojiList = screen.getAllByTestId("emoji-row");
  expect(expectedEmojiList.length).toBe(20);
});

it("renders only Grimacing when user fliters by grim", () => {
  const page = render(<App />);
  const input = page.getByLabelText("search-input");
  fireEvent.change(input, { target: { value: "Grim" } });

  const expectedEmojiList = screen.getAllByTestId("emoji-row");
  expect(expectedEmojiList.length).toBe(1);
  const expectedGrimacingEmoji = screen.getByText("Grimacing");
  expect(expectedGrimacingEmoji).toBeTruthy();
});

