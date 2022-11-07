import cn from "../../lib/class-names"
import IUnderlineLinkProps from "../../interfaces/underline-link-props"
import BaseLink from "./base-link"
import * as React from "react"

function WhiteLink({
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
      className={cn("text-white", className)}
      underline={underline}
    >
      {children}
    </BaseLink>
  )
}

export default WhiteLink
