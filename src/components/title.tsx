import React from "react"

type TitleProps = {
  className?: string
}

const Title: React.FC<TitleProps> = ({ className, children }) => (
  <h5 className={`bg-gray-100 p-1 mb-4 ${className}`}>{children}</h5>
)

export default Title
