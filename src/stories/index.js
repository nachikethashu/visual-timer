import React from "react"

import { storiesOf } from "@storybook/react"
import { withKnobs, text, number, object } from "@storybook/addon-knobs"

import Dial from "../Dial"
import App from "../App"
import { getTheme } from "../themes"

import "../index.css"

storiesOf("App", module).add("Dial App", () => <App />)

storiesOf("Dial", module)
  .addDecorator(withKnobs)
  .add("Dial basics", () => (
    <Dial
      size={text("size", "250px")}
      timer={number("timer", 45)}
      theme={object("theme", getTheme(), "GROUP-ID1")}
    />
  ))
