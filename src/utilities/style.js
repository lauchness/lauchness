const breakpoints = { small: 576, medium: 768, large: 992, extraLarge: 1200 }

export const mediaQuery = (down = false) =>
  Object.keys(breakpoints).reduce(
    (acc, key) => ({
      ...acc,
      [key]: `@media (${down ? "max" : "min"}-width: ${breakpoints[key]}px)`,
    }),
    {}
  )
