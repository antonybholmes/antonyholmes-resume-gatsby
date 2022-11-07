import React from "react"
import ILinkProps from "../interfaces/link-props"
import cn from "../lib/class-names"
import ColorLink from "./colorlink"
import BaseLink from "./link/base-link"

interface IProps extends ILinkProps {
  underline?: boolean
}

const BlueLink = ({
  href,
  className,
  ariaLabel,
  children,
}:IProps) => (
  <BaseLink
    href={href}
    className={cn("text-blue-500", className)} ariaLabel={ariaLabel}  >
    {children}
  </BaseLink>
)

export default BlueLink
