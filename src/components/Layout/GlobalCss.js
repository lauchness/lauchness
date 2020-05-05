import { css } from "@emotion/core"

export const globalCss = theme => css`
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    font: 112.5%/1.45em georgia, serif;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
    background-color: ${theme.color.background};
    color: ${theme.color.copy};
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: "kern", "liga", "clig", "calt";
    -ms-font-feature-settings: "kern", "liga", "clig", "calt";
    -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
    font-feature-settings: "kern", "liga", "clig", "calt";
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  h1 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 2.25rem;
    line-height: 1.1;
  }
  h2 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.62671rem;
    line-height: 1.1;
  }
  h3 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.38316rem;
    line-height: 1.1;
  }
  h4 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1rem;
    line-height: 1.1;
  }
  h5 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.85028rem;
    line-height: 1.1;
  }
  h6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.78405rem;
    line-height: 1.1;
  }
  a {
    color: ${theme.color.copy};
    text-decoration: underline;
    border: none;
    border-radius: ${theme.units.borderRadius};

    &:hover {
      outline: none;
      background-color: ${theme.color.hover};
    }

    &:focus {
      outline-color: ${theme.color.outline};
      outline-offset: -2px;
      outline-style: auto;
      outline-width: 5px;
    }

    &:active {
      transform: translate3d(0, 2px, 0);
      box-shadow: none;
    }
  }
  b {
    font-weight: bold;
  }
  strong {
    font-weight: bold;
  }
  code {
    font-size: 1.25rem;
    background-color: ${theme.color.codeBg};
    color: ${theme.color.white};
    padding: 0 ${theme.units.getGutter(0.25)};
    border: 1px solid ${theme.color.copy};
    border-radius: ${theme.units.borderRadius};
  }
  deckgo-highlight-code {
    margin-bottom: ${theme.units.getGutter(4)};
  }
  hr {
    overflow: visible;
    height: 0;
    padding: 0;
    border: none;
    margin-top: ${theme.units.getGutter(4)};
    margin-bottom: ${theme.units.getGutter(8)};
    border-top: medium double ${theme.color.pompAndPower};
    text-align: center;

    &::after {
      content: "§";
      color: ${theme.color.pompAndPower};
      display: inline-block;
      position: relative;
      top: -0.7em;
      font-size: 1.5em;
      padding: 0 0.25em;
      background: ${theme.color.background};
    }
  }
  blockquote {
    display: flex;
    margin: 0;
    padding: 0;
    border-radius: ${theme.units.borderRadius};
    background-color: ${theme.color.black};
    color: ${theme.color.white};

    a {
      padding: 0 ${theme.units.getGutter(0.5)};
      color: ${theme.color.white};

      &:hover {
        outline: none;
        background-color: rgba(255, 255, 255, 0.2);
      }

      &:focus {
        outline-color: ${theme.color.outline};
        outline-offset: -2px;
        outline-style: auto;
        outline-width: 5px;
      }
    }

    &::before {
      flex-shrink: 0;
      content: "";
      width: 12px;
      margin-right: 1rem;
      border-radius: ${theme.units.borderRadius} 0 0 ${theme.units.borderRadius};
      background-color: ${theme.color.pompAndPower};
    }
  }
  twitter-widget {
    margin-left: auto;
    margin-right: auto;
  }
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
  .markdown-link {
    margin-left: ${theme.units.getGutter()};
    padding: 0 ${theme.units.getGutter(0.5)};
  }
`
