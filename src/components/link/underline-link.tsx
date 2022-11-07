import ILinkProps from "../../interfaces/link-props"
import BaseLink from "./base-link"

function UnderlineLink({ href, ariaLabel, className, children }: ILinkProps) {
  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      underline={true}
      className={className}
    >
      {children}
    </BaseLink>
  )
}

export default UnderlineLink
