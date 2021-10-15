import * as React from "react"
import { createContext, useReducer, useContext } from "react"
import { theme } from "@chakra-ui/react"

const allThemeColors = [
  "gray",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "cyan",
  "purple",
  "pink",
]

const defaultState = {
  colorScheme: "purple",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "nextColor":
      const { colorScheme: currentColor } = state
      const currentIndex = allThemeColors.findIndex(c => c === currentColor)
      const colorScheme = allThemeColors[currentIndex + 1] || allThemeColors[0]
      return { ...state, colorScheme }
    default:
      throw new Error("invalid action.type")
  }
}

const ThemeContext = createContext(defaultState)

const ThemeCtxProvider = props => {
  const sd = useReducer(reducer, defaultState)

  return (
    <ThemeContext.Provider value={sd}>{props.children}</ThemeContext.Provider>
  )
}

export const useThemectx = () => useContext(ThemeContext)

export const ThemeProvider = ({ element }) => (
  <ThemeCtxProvider>{element}</ThemeCtxProvider>
)

export const useGetThemeColor = () => {
  const [{ colorScheme }] = useThemectx()
  const themeColor = theme["colors"][colorScheme][700]
  return { themeColor }
}
