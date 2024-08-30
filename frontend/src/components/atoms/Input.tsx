import styled from "styled-components";

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing(1)};
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
`;

export default Input;
