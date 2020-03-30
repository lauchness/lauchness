import { useState, useEffect } from "react"

const KEY = "lauchness-darkmode"

function useDarkmode() {
  const { localStorage, matchMedia } = window
  const storagePreferenceJson = localStorage.getItem(KEY)
  const storagePreference =
    storagePreferenceJson && JSON.parse(storagePreferenceJson)

  const mediaPreference = matchMedia("(prefers-color-scheme: dark)").matches

  const [darkMode, setDarkMode] = useState(
    storagePreference ? storagePreference.prefersDarkmode : mediaPreference
  )

  const updateDarkmode = value => {
    const darkmodeJson = JSON.stringify({ prefersDarkmode: value })
    localStorage.setItem(KEY, darkmodeJson)
    setDarkMode(value)
  }

  return [darkMode, updateDarkmode]
}

export default useDarkmode
