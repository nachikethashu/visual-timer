// @flow
import React from "react"
import Dial from "./Dial"
import { css } from "emotion"
import { ThemeProvider } from "emotion-theming"
import { getTheme } from "./themes"

function App() {
  const stageCSS = css`
    width: 100%;
    height: 100%;
  `
  return (
    <div className={stageCSS}>
      <ThemeProvider theme={getTheme("dark")}>
        <Dial size="400px" timer={45} />
      </ThemeProvider>
    </div>
  )
}

export default App
