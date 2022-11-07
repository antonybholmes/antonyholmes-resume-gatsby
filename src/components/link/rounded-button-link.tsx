import cn from "../../lib/class-names"
import ILinkProps from "../../interfaces/link-props"
import * as React from "react"
import ButtonLink from "./button-link"

export const ROUNDED_BUTTON_CLASSES = `rounded-lg overflow-hidden`

function RoundedButtonLink({
  href,
  ariaLabel,
  underline,
  className,
  children,
}: ILinkProps) {
  return (
    <ButtonLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={cn(ROUNDED_BUTTON_CLASSES, className)}
    >
      {children}
    </ButtonLink>
  )
}

export default RoundedButtonLink

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
