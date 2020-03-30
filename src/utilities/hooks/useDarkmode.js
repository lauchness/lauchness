import { useState, useEffect } from "react"

const KEY = "lauchness-darkmode"

function useDarkmode() {
  let initialState
  if (typeof window !== "undefined") {
    const { localStorage, matchMedia } = window
    const storagePreferenceJson = localStorage && localStorage.getItem(KEY)
    const storagePreference =
      storagePreferenceJson && JSON.parse(storagePreferenceJson)

    const mediaPreference = matchMedia("(prefers-color-scheme: dark)").matches

    initialState = storagePreference
      ? storagePreference.prefersDarkmode
      : mediaPreference
  }
  const [darkMode, setDarkMode] = useState(initialState)

  const updateDarkmode = value => {
    const darkmodeJson = JSON.stringify({ prefersDarkmode: value })
    localStorage.setItem(KEY, darkmodeJson)
    setDarkMode(value)
  }

  return [darkMode, updateDarkmode]
}

export default useDarkmode
