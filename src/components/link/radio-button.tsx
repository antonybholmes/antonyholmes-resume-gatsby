"use client"

import { useState } from "react"
import cn from "../../lib/class-names"
import * as React from "react"

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const RADIO_SIZE = "20px"
export const ORB_SIZE = "12px"
export const ORB_OFFSET = "3px"

type RadioButtonProps = {
  index: number
  text: string
  selected: boolean
  onChange: any
}

function RadioButton({ index, text, selected, onChange }: RadioButtonProps) {
  const [hover, setHover] = useState(false)

  function onMouseEnter(e: any) {
    setHover(true)
  }

  function onMouseLeave(e: any) {
    setHover(false)
  }

  return (
    <li key={index}>
      <button
        onClick={() => onChange(text, index)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`flex w-full cursor-pointer flex-row items-center gap-x-2 py-1`}
      >
        <div
          className={cn(
            `relative overflow-hidden rounded-full border bg-white`,
            [
              selected,
              "border-card-blue",
              cn("color-ani", [hover, "!border-card-blue", "!border-gray-300"]),
            ]
          )}
          style={{ width: RADIO_SIZE, height: RADIO_SIZE }}
        >
          {selected && (
            <div
              className="absolute rounded-full bg-button-blue"
              style={{
                width: ORB_SIZE,
                height: ORB_SIZE,
                left: ORB_OFFSET,
                top: ORB_OFFSET,
              }}
            />
          )}
        </div>

        <div className={`color-ani truncate`}>{text}</div>

        {/* {selected && (
          <div>
            <FontAwesomeIcon icon="check" />
          </div>
        )} */}

        {/* <div className={`trans-ani ${selected ? "opacity-100" : "opacity-0"}`}>
          <FontAwesomeIcon icon="check" className={`text-sm`} />
        </div>  */}

        {/* <div
          className={`text-white w-full h-full rounded-full trans-ani border border-solid ${selected ? "border-transparent" : "border-gray-300"}`} 
        /> */}
      </button>
    </li>
  )
}

export default RadioButton
