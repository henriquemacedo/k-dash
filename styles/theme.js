import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --duet-color-primary: #005fcc;
    --duet-color-text: #333;
    --duet-color-text-active: #fff;
    --duet-color-placeholder: #666;
    --duet-color-button: #f5f5f5;
    --duet-color-surface: #fff;
    --duet-color-overlay: rgba(0, 0, 0, 0.8);
    --duet-color-border: #333;

    --duet-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    --duet-font-normal: 400;
    --duet-font-bold: 600;

    --duet-radius: 4px;
    --duet-z-index: 600;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme = {
  body: "#f1f1f1",
  text: "#121620",
};

export const darkTheme = {
  body: "#121620",
  text: "#f1f1f1",
};
