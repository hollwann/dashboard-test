import React from "react";
import { render, screen, fireEvent } from "../../utils/test-utils";
import BetModal from "./BetModal";

describe("BetModal", () => {
  test("renders modal with event name", () => {
    const handleClose = jest.fn();
    render(
      <BetModal eventName="Soccer: Team A vs. Team B" onClose={handleClose} />
    );

    const modalTitle = screen.getByText(
      /Place Bet on Soccer: Team A vs. Team B/i
    );
    expect(modalTitle).toBeInTheDocument();
  });

  test("displays error message for invalid bet amount", () => {
    const handleClose = jest.fn();
    render(
      <BetModal eventName="Soccer: Team A vs. Team B" onClose={handleClose} />
    );

    const placeBetButton = screen.getByText(/Place Bet/i, {
      selector: "button",
    });
    fireEvent.click(placeBetButton);

    const errorMessage = screen.getByText(/Please enter a valid bet amount./i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("calls onClose when cancel button is clicked", () => {
    const handleClose = jest.fn();
    render(
      <BetModal eventName="Soccer: Team A vs. Team B" onClose={handleClose} />
    );

    const cancelButton = screen.getByText(/Cancel/i);
    fireEvent.click(cancelButton);

    expect(handleClose).toHaveBeenCalled();
  });
});
