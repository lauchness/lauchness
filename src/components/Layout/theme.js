const font = {
  family: {
    regular: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
  "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
  "Helvetica Neue", sans-serif;`,
    code: `source-code-pro, Menlo, Monaco, Consolas, "Courier New",
  monospace;`,
  },
  size: {
    large: "2.4rem",
    regular: "1.6rem",
    small: "1rem",
  },
  lineHeight: {
    regular: "1.5",
  },
}

const baseColors = {
  black: "#111111",
  darkGray: "#282c34",
  lightGray: "#CDCDCD",
  white: "#E3E4DB",
  pastelPurple: "#AEA4BF",
  maximumPurple: "#822E81",
  palatinatePurple: "#5F225E",
  pompAndPower: "#8F6593",
  wintergreenDream: "#488286",
  twitterBlue: "#1da1f2",
  linkedInBlue: "#0077b5",
  gitHubWhite: "#FFFFFF",
  maastrichtBlue: "#0B132B",
  midnightGreen: "#124559",
  darkImperialBlue: "#0B4F6C",
  screaminGreen: "#87FF65",
  yellowMunsell: "#F0C808",
  seaBlue: "#086788",
}

const lightMode = {
  copy: baseColors.black,
  background: baseColors.white,
  altBackground: baseColors.lightGray,
  hover: "rgba(0,0,0,0.2)",
}

const darkMode = {
  copy: baseColors.white,
  background: baseColors.darkGray,
  altBackground: baseColors.black,
  hover: "rgba(255,255,255,0.2)",
}

const layers = {
  bottom: 0,
  mid: 50,
  top: 100,
}

const units = {
  borderRadius: "4px",
  getGutter: (multiplier = 1) => `${0.5 * multiplier}rem`,
}

export default dark => {
  const dynamicColors = dark ? darkMode : lightMode
  return {
    color: {
      ...baseColors,
      ...dynamicColors,
      brand1: baseColors.darkImperialBlue,
      brand2: baseColors.maastrichtBlue,
      button: baseColors.maximumPurple,
      buttonHover: baseColors.palatinatePurple,
      buttonDisabled: baseColors.pastelPurple,
      codeBg: baseColors.pompAndPower,
      codeColor: baseColors.white,
      warning: baseColors.yellowMunsell,
      outline: baseColors.pompAndPower,
    },
    font,
    layers,
    units,
  }
}
