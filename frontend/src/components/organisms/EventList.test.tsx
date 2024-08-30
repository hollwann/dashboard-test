import React from "react";
import { render, screen, fireEvent } from "../../utils/test-utils";
import EventList from "./EventList";
import { Event } from "../../types/event";

const mockEvents: Event[] = [
  { event_id: 1, event_name: "Soccer: Team A vs. Team B", odds: 1.75 },
  { event_id: 2, event_name: "Basketball: Team C vs. Team D", odds: 2.1 },
];

describe("EventList", () => {
  test("renders a list of events", () => {
    render(<EventList events={mockEvents} />);

    const eventItems = screen.getAllByRole("heading", { level: 3 });
    expect(eventItems).toHaveLength(2);
    expect(eventItems[0]).toHaveTextContent("Soccer: Team A vs. Team B");
    expect(eventItems[1]).toHaveTextContent("Basketball: Team C vs. Team D");
  });

  test('shows a modal when "Place Bet" button is clicked', () => {
    render(<EventList events={mockEvents} />);

    const placeBetButtons = screen.getAllByText(/Place Bet/i);
    fireEvent.click(placeBetButtons[0]);

    const modalTitle = screen.getByText(
      /Place Bet on Soccer: Team A vs. Team B/i
    );
    expect(modalTitle).toBeInTheDocument();
  });

  test('closes the modal when "Cancel" button is clicked', () => {
    render(<EventList events={mockEvents} />);

    const placeBetButtons = screen.getAllByText(/Place Bet/i);
    fireEvent.click(placeBetButtons[0]);

    const cancelButton = screen.getByText(/Cancel/i);
    fireEvent.click(cancelButton);

    const modalTitle = screen.queryByText(
      /Place Bet on Soccer: Team A vs. Team B/i
    );
    expect(modalTitle).not.toBeInTheDocument();
  });
});
