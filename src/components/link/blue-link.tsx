import cn from "../../lib/class-names"
import ILinkProps from "../../interfaces/link-props"
import BaseLink from "./base-link"
import * as React from "react"

interface IProps extends ILinkProps {
  underline?: boolean
}

function BlueLink({
  href,
  ariaLabel,
  underline = true,
  className,
  children,
}: IProps) {
  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={cn("text-card-blue", className)}
    >
      {children}
    </BaseLink>
  )
}

export default BlueLink
