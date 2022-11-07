import cn from "../../lib/class-names"
import ILinkProps from "../../interfaces/link-props"
import * as React from "react"
import PillButtonLink from "./pill-button-link"

export const BLUE_BUTTON_CLASSES =
  "bg-card-blue hover:bg-button-blue text-white font-medium"

function BlueButtonLink({
  href,
  ariaLabel,
  underline,
  className,
  children,
}: ILinkProps) {
  return (
    <PillButtonLink
      href={href}
      ariaLabel={ariaLabel}
      className={cn(BLUE_BUTTON_CLASSES, className)}
      underline={underline}
    >
      {children}
    </PillButtonLink>
  )
}

export default BlueButtonLink

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
