import * as React from "react"
import cn from "../../lib/class-names"
import { BLUE_BUTTON_CLASSES } from "./blue-button-link"
import { IButtonProps } from "./button"
import { BUTTON_CLASSES } from "./button-link"
import { ROUNDED_BUTTON_CLASSES } from "./rounded-button-link"

function BlueButton({ onClick, ariaLabel, className, children }: IButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn(
        BUTTON_CLASSES,
        ROUNDED_BUTTON_CLASSES,
        BLUE_BUTTON_CLASSES,
        className
      )}
    >
      {children}
    </button>
  )
}

export default BlueButton

//font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
