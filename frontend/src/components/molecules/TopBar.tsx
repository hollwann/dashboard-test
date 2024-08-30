import React from "react";
import styled from "styled-components";

const TopBarContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing(2)};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  margin: 0;
`;

const UserSection = styled.div`
  font-size: 1rem;
`;

const TopBar: React.FC = () => {
  return (
    <TopBarContainer>
      <Title>Sports Betting Dashboard</Title>
      <UserSection>Welcome</UserSection>
    </TopBarContainer>
  );
};

export default TopBar;
