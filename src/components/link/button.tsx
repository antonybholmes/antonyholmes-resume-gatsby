import cn from "../../lib/class-names"

import * as React from "react"
import { BUTTON_CLASSES } from "./button-link"
import IChildrenProps from "../../interfaces/children-props"
import IAriaProps from "../../interfaces/aria-props"

export interface IButtonProps extends IChildrenProps, IAriaProps {
  onClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

function Button({ onClick, ariaLabel, className, children }: IButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(BUTTON_CLASSES, className)}
    >
      {children}
    </button>
  )
}

export default Button

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
