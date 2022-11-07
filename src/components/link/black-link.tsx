import ILinkProps from "../../interfaces/link-props"
import BaseLink from "./base-link"
import * as React from "react"

interface IProps extends ILinkProps {
  underline?: boolean
}

function BlackLink({
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
      className={className}
    >
      {children}
    </BaseLink>
  )
}

export default BlackLink
