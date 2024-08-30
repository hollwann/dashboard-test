import React from "react";
import { render, screen } from "../../utils/test-utils";
import HomePage from "./HomePage";
import useFetchEvents from "../../hooks/useFetchEvents";

jest.mock("../../hooks/useFetchEvents");

const mockUseFetchEvents = useFetchEvents as jest.MockedFunction<
  typeof useFetchEvents
>;

describe("HomePage", () => {
  test("displays loading spinner while fetching events", () => {
    mockUseFetchEvents.mockReturnValue({
      events: [],
      loading: true,
      error: null,
    });

    render(<HomePage />);
    const loader = screen.getByRole("status");
    expect(loader).toBeInTheDocument();
  });

  test("displays events after fetching", () => {
    mockUseFetchEvents.mockReturnValue({
      events: [
        { event_id: 1, event_name: "Soccer: Team A vs. Team B", odds: 1.75 },
        { event_id: 2, event_name: "Basketball: Team C vs. Team D", odds: 2.1 },
      ],
      loading: false,
      error: null,
    });

    render(<HomePage />);
    const eventNames = screen.getAllByRole("heading", { level: 3 });
    expect(eventNames).toHaveLength(2);
    expect(eventNames[0]).toHaveTextContent("Soccer: Team A vs. Team B");
    expect(eventNames[1]).toHaveTextContent("Basketball: Team C vs. Team D");
  });

  test("displays error message if there is an error fetching events", () => {
    mockUseFetchEvents.mockReturnValue({
      events: [],
      loading: false,
      error: "Failed to fetch events.",
    });

    render(<HomePage />);
    const errorMessage = screen.getByText(/Error: Failed to fetch events./i);
    expect(errorMessage).toBeInTheDocument();
  });
});
