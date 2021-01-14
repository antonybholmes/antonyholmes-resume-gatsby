import React from "react"
import ColorLink from "./colorlink"

type LinkProps = {
  to: string
  className?: string
  activeClassName?: string
}

const BlueLink: React.FC<LinkProps> = ({
  to,
  className,
  activeClassName,
  children,
}) => (
  <ColorLink
    color="blue"
    to={to}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </ColorLink>
)

BlueLink.defaultProps = {
  className: "",
  activeClassName: "",
}

export default BlueLink
