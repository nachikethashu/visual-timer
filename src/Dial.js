// @flow

import React from "react"
import { css, cx, keyframes } from "emotion"
import { withTheme } from "emotion-theming"
import type { Theme } from "./themes"

type DialProps = {
  size: string,
  timer: number,
  theme: Theme
}

function getRightFaceTime(timer: number, halfFaceSeconds: number = 1800) {
  const remainingMinsInFirstHalf = 60 - timer
  return halfFaceSeconds - (remainingMinsInFirstHalf * halfFaceSeconds) / 30
}

function Dial(props: DialProps) {
  const { size, timer, theme } = props

  if (timer > 60) {
    return null
  }

  const center = css`
    position: relative;
    transform: translate(-50%, 0%);
    top: 50%;
    left: 50%;
  `

  const firstHalfSpin = keyframes`
    from { transform: rotate(${1 - timer / 60}turn); }
    to { transform: rotate(.5turn); }
  `
  const secondHalfSpin = keyframes`
    from { transform: rotate(0turn); background-color: ${theme.background}; }
    to { transform: rotate(.5turn); background-color: ${theme.background}; }
  `

  const halfFaceSeconds = 1800 // you can reduce it to see it in fast-forwarded mode
  const remainingSecsInRightFace = getRightFaceTime(timer, halfFaceSeconds)

  const rightFaceAnimation = `${firstHalfSpin} ${remainingSecsInRightFace}s linear 0s 1 forwards`
  const leftFaceAnimation = `${secondHalfSpin} ${halfFaceSeconds}s linear ${remainingSecsInRightFace}s 1 forwards`

  const dial = css`
    width: ${size};
    height: ${size};
    background-color: ${theme.timer};
    border-radius: 100%;
    color: transparent;
    text-align: center;
    &::before {
      content: "";
      display: block;
      margin-left: 50%;
      height: 100%;
      border-radius: 0 100% 100% 0 / 50%;
      background-color: inherit;
      transform-origin: left;
      animation: ${rightFaceAnimation}, ${leftFaceAnimation};
    }
  `
  const backface = css`
    background-image: linear-gradient(
      to right,
      transparent 50%,
      ${theme.background} 0
    );
  `

  const clockfaceElements = css`
    display: block;
    background-color: inherit;
    transform-origin: left;
    width: ${size};
    height: ${size};
    position: absolute;
    left: 50%;
    transform: translate(-50%, -100%);
  `

  const clockFace = css`
    fill: none;
    stroke: ${theme.clockface};
    stroke-width: 0.5;
    stroke-linecap: round;
    transform: rotate(-90deg);
    overflow: visible;
  `

  return (
    <div>
      <div className={cx(dial, center, backface)} />
      <svg viewBox="0 0 40 40" className={cx(clockFace, clockfaceElements)}>
        <circle cx="20" cy="20" r="20" />
        <g className="marks">
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
          <line x1="15" y1="0" x2="16" y2="0" />
        </g>
      </svg>
    </div>
  )
}

export default withTheme(Dial)
