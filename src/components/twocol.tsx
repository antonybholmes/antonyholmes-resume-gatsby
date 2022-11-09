import React, { ReactElement } from "react"
import IChildProps from "../interfaces/child-props"
import cn from "../lib/class-names"

const TwoCol = ({ className, children }: IChildProps) => (
  <div className={cn("grid grid-cols-8 gap-x-6 px-6", className)}>
    <div className="col-span-3">{children[0]}</div>
    <div className="col-span-5">{children[1]}</div>
  </div>
)

export default TwoCol
