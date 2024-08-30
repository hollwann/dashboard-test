import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        overflow-x: hidden;
        padding-top: 60px;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    .loader {
        border: 4px solid ${({ theme }) => theme.colors.secondary};
        border-top: 4px solid ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 1s linear infinite;
        margin: 20px auto;
        display: block;
        role: status; 
        aria-live: polite; 
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export default GlobalStyle;
