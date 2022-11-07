import cn from "../../lib/class-names"
import IUnderlineLinkProps from "../../interfaces/underline-link-props"
import IndexLink from "./index-link"
import * as React from "react"

function BlueIndexLink({
  href,
  ariaLabel,
  underline = true,
  className,
  children,
}: IUnderlineLinkProps) {
  return (
    <IndexLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={cn("stroke-card-blue text-card-blue", className)}
    >
      {children}
    </IndexLink>
  )
}

export default BlueIndexLink
