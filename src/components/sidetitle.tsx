import React from "react"

type TitleProps = {
  className?: string
}

const SideTitle: React.FC<TitleProps> = ({ className, children }) => (
  <h5
    className={`uppercase font-normal bg-black-30 mb-4 py-2 ${className}`}
    style={{
      paddingLeft: "0.15in",
      paddingRight: "0.15in",
    }}
  >
    {children}
  </h5>
)

export default SideTitle
