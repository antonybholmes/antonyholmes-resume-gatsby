import React, { ReactElement } from "react"
import IChildProps from "../interfaces/child-props"
import cn from "../lib/class-names"

const TwinCol = ({ className, children }: IChildProps) => (
  <div className={cn("grid grid-cols-2 gap-x-8", className)}>
    <div>{children[0]}</div>
    <div>{children[1]}</div>
  </div>
)

export default TwinCol
