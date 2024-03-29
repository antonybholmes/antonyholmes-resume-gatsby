import cn from "../../lib/class-names"
import ILinkProps from "../../interfaces/link-props"
import BaseLink from "./base-link"
import * as React from "react"

export const BUTTON_CLASSES =
  "flex flex-row items-center justify-center border border-transparent color-ani"

function ButtonLink({
  href,
  ariaLabel,
  underline,
  onHover,
  className,
  children,
}: ILinkProps) {
  return (
    <BaseLink
      href={href}
      underline={underline}
      ariaLabel={ariaLabel}
      onHover={onHover}
      className={cn(BUTTON_CLASSES, className)}
    >
      {children}
    </BaseLink>
  )
}

export default ButtonLink

//font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
