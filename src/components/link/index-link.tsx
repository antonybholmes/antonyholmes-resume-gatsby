import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import cn from "../../lib/class-names"
import IUnderlineLinkProps from "../../interfaces/underline-link-props"
import BaseLink from "./base-link"
import * as React from "react"

export default function IndexLink({
  href,
  ariaLabel,
  underline = false,
  className,
  children,
}: IUnderlineLinkProps) {
  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={cn("flex flex-row gap-x-1", className)}
    >
      {children}

      <div>
        <FontAwesomeIcon
          icon={faChevronRight}
          className={cn("h-full w-3 transition-transform duration-200")}
        />
      </div>
    </BaseLink>
  )
}
