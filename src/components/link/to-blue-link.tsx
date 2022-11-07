import cn from "../../lib/class-names"
import IUnderlineLinkProps from "../../interfaces/underline-link-props"
import BaseLink from "./base-link"
import * as React from "react"

function ToBlueLink({
  href,
  ariaLabel,
  className,
  underline = true,
  children,
}: IUnderlineLinkProps) {
  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={cn(` hover:text-button-blue`, className)}
    >
      {children}
    </BaseLink>
  )
}

export default ToBlueLink
