import { Link } from "gatsby"
import * as React from "react"
import cn from "../../lib/class-names"
import IHoverProps from "../../interfaces/hover-props"
import ILinkProps from "../../interfaces/link-props"
import IMouseProps from "../../interfaces/mouse-props"
import ExtLink from "./ext-link"
//import AniLink from "gatsby-plugin-transition-link/AniLink"

interface IProps extends ILinkProps, IMouseProps, IHoverProps {}

function BaseLink({
  href,
  target = "_blank",
  ariaLabel,
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

  if (!ariaLabel) {
    ariaLabel = `Click to visit ${href}`
  }

  // Test if we use the NextJS router link or a regular a for external urls
  const isExt =
    href &&
    (!href.startsWith("/") || href.startsWith("http") || href.startsWith("www"))

  if (isExt) {
    return (
      <ExtLink
        href={href}
        ariaLabel={ariaLabel}
        className={className}
        underline={underline}
        target={target}
      >
        {children}
      </ExtLink>
    )
  } else {
    if (!children) {
      children = <>{href}</>
    }

    return (
      // <AniLink
      //   fade
      //   to={href}
      //   aria-label={ariaLabel}
      //   className={cn([underline, `hover:underline`], className)}
      //   onClick={onClick}
      //   onMouseEnter={_onMouseEnter}
      //   onMouseLeave={_onMouseLeave}
      // >
      //   {children}
      // </AniLink>
      <Link
        to={href}
        aria-label={ariaLabel}
        className={cn([underline, `hover:underline`], className)}
      >
        {children}
      </Link>
    )
  }
}

export default BaseLink
