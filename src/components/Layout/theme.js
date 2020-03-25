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
  lightPurple: "#AEA4BF",
  purple: "#8F6593",
  outline: "#8F6593",
  twitterBlue: "#1da1f2",
  linkedInBlue: "#0077b5",
  gitHubWhite: "#FFFFFF",
}

const lightMode = {
  copy: baseColors.black,
  background: baseColors.white,
  altBackground: baseColors.lightGray,
}

const darkMode = {
  copy: baseColors.white,
  background: baseColors.darkGray,
  altBackground: baseColors.black,
}

const layers = {
  bottom: 0,
  mid: 50,
  top: 100,
}

const units = {
  borderRadius: "4px",
}

export default dark => {
  const dynamicColors = dark ? darkMode : lightMode
  return {
    color: {
      ...baseColors,
      ...dynamicColors,
      linearBackground: `linear-gradient(.25turn, ${baseColors.black}, 5%, ${baseColors.darkGray})`,
    },
    font,
    layers,
    units,
  }
}
