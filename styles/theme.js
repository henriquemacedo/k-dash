import theme from "styled-theming";
import { createGlobalStyle } from "styled-components";
import { rem } from "polished";

const bodyBackground = theme("mode", {
  light: "var(--light)",
  dark: "var(--dark)",
});

const textColor = theme("mode", {
  light: "var(--dark)",
  dark: "var(--light)",
});

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  :root {
    --fontRegular: 400;
    --fontBlack: 900;
    --light: #fafafa;
    --grey: #eeeeee;
    --dark: #212121;
    --pink: #A400C9;
    --warning: #FFB74D;
    --danger: #F44336;

    --duet-color-primary: #005fcc;
    --duet-color-text: #333;
    --duet-color-text-active: #fff;
    --duet-color-placeholder: #666;
    --duet-color-button: #eeeeee;
    --duet-color-surface: #fff;
    --duet-color-overlay: rgba(0, 0, 0, 0.8);
    --duet-font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    --duet-font-normal: 400;
    --duet-font-bold: 600;
    --duet-radius: 6px;
    --duet-z-index: 600;
  }

  html {
    font-size: 100%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: ${bodyBackground};
    padding-top: ${rem("100px")};
    font-family: 'Roboto', Verdana, Arial, Helvetica, sans-serif;
    font-weight: var(--fontRegular);
    color: ${textColor};
    overflow-x: hidden;
  }
`;
