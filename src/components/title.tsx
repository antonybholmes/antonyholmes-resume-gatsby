import React from "react"

type TitleProps = {
  className?: string
}

const Title: React.FC<TitleProps> = ({ className, children }) => (
  <h5
    className={`bg-gray-100 py-2 mb-4  ${className}`}
    style={{ paddingLeft: "0.25in", paddingRight: "0.25in" }}
  >
    {children}
  </h5>
)

export default Title
