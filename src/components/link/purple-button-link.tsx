import cn from "../../lib/class-names"
import ILinkProps from "../../interfaces/link-props"
import * as React from "react"
import PillButtonLink from "./pill-button-link"

export const BUTTON_CLASSES = "bg-purple-600 hover:bg-purple-700 text-white"

function PurpleButtonLink({
  href,
  ariaLabel,
  className,
  children,
}: ILinkProps) {
  return (
    <PillButtonLink
      href={href}
      ariaLabel={ariaLabel}
      className={cn(BUTTON_CLASSES, className)}
    >
      {children}
    </PillButtonLink>
  )
}

export default PurpleButtonLink

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
