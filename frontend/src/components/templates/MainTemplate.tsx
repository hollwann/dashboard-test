import React from "react";
import styled from "styled-components";
import TopBar from "../molecules/TopBar";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(2)};
  padding-top: 80px; /* Add padding to account for fixed TopBar */
`;

const MainTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <TopBar />
      <Container>{children}</Container>
    </>
  );
};

export default MainTemplate;
