import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Event } from "../../types/event";
import Button from "../atoms/Button";
import BetModal from "./BetModal";

interface EventListProps {
  events: Event[];
}

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EventList: React.FC<EventListProps> = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handlePlaceBetClick = useCallback((event: Event) => {
    setSelectedEvent(event);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedEvent(null);
  }, []);

  return (
    <>
      <List>
        {events.map((event) => (
          <ListItem key={event.event_id}>
            <div>
              <h3>{event.event_name}</h3>
              <p>Odds: {event.odds}</p>
            </div>
            <Button onClick={() => handlePlaceBetClick(event)}>
              Place Bet
            </Button>
          </ListItem>
        ))}
      </List>
      {selectedEvent && (
        <BetModal
          eventName={selectedEvent.event_name}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default EventList;
