import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import cn from "../../lib/class-names"
import VCenterRow from "../v-center-row"
import * as React from "react"
import { BUTTON_CLASSES } from "./button-link"
import { RADIO_SIZE } from "./radio-button"

type CheckMarkProps = {
  selected: boolean
  hover: boolean
  className?: string
}

function CheckMark({ selected, hover, className }: CheckMarkProps) {
  return (
    <VCenterRow
      className={cn(
        BUTTON_CLASSES,
        "overflow-hidden rounded",
        [
          selected,
          "!border-card-blue bg-card-blue text-white",
          `color-ani bg-white ${
            hover ? "!border-card-blue" : "!border-gray-300"
          }`,
        ],
        className
      )}
      style={{ width: RADIO_SIZE, height: RADIO_SIZE }}
    >
      {selected && <FontAwesomeIcon icon={faCheck} className="w-3" />}
    </VCenterRow>
  )
}

export default CheckMark
