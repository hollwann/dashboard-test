import React from "react";
import MainTemplate from "../templates/MainTemplate";
import Heading from "../atoms/Heading";
import EventList from "../organisms/EventList";
import useFetchEvents from "../../hooks/useFetchEvents";
import styled from "styled-components";

const ErrorMessage = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: 4px;
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  text-align: center;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

const HomePage: React.FC = () => {
  const { events, loading, error } = useFetchEvents();

  return (
    <MainTemplate>
      <Heading>Available Events</Heading>
      {loading && (
        <LoaderContainer role="status">
          <div className="loader"></div>
        </LoaderContainer>
      )}
      {error && <ErrorMessage>Error: {error}</ErrorMessage>}
      {events && events.length > 0 ? (
        <EventList events={events} />
      ) : (
        !loading && <p>No events available.</p>
      )}
    </MainTemplate>
  );
};

export default HomePage;
