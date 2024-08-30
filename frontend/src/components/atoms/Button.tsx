import styled from "styled-components";

const Button = styled.button<{ primary?: boolean }>`
  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.primary : theme.colors.secondary};
  color: #fff;
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  white-space: nowrap;
`;

export default Button;
