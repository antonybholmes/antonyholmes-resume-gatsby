import cn from "../../lib/class-names"
import ILinkProps from "../../interfaces/link-props"
import IMouseProps from "../../interfaces/mouse-props"
import * as React from "react"
import IHoverProps from "../../interfaces/hover-props"

interface IProps extends ILinkProps, IMouseProps, IHoverProps {
  target?: string
  underline?: boolean
}

function ExtLink({
  href,
  ariaLabel,
  target = "_blank",
  underline = false,
  className,
  children,
}: IProps) {
  // function _onMouseEnter(e: React.MouseEvent<Element, MouseEvent>) {
  //   if (onHover) {
  //     onHover(true)
  //   }

  //   if (onMouseEnter) {
  //     onMouseEnter(e)
  //   }
  // }

  // function _onMouseLeave(e: React.MouseEvent<Element, MouseEvent>) {
  //   if (onHover) {
  //     onHover(false)
  //   }

  //   if (onMouseLeave) {
  //     onMouseLeave(e)
  //   }
  // }

  if (!children) {
    children = <>{href}</>
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={target}
      className={cn([underline, `hover:underline`], className)}
    >
      {children}
    </a>
  )
}

export default ExtLink