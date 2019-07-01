// @flow

export type Theme = {
  timer: string,
  background: string,
  clockface: string
}
type Themes = {
  [string]: Theme
}

const themes: Themes = {
  default: {
    timer: "tomato",
    background: "azure",
    clockface: "black"
  },
  material: {
    timer: "#ff1744",
    background: "#ffebee",
    clockface: "black"
  },
  dark: {
    timer: "black",
    background: "silver",
    clockface: "azure"
  }
}

export const getTheme = (name: string): Theme => themes[name] || themes.default
