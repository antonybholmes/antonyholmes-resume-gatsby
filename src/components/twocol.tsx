import React from "react"
import Row from "./row"

const TwoCol = ({ children }) => (
  <Row isVCentered={false}>
    <div
      className="bg-default-blue w-1/3 text-white"
      style={{ minHeight: "11in" }}
    >
      {children[0]}
    </div>
    <div className="w-2/3">{children[1]}</div>
  </Row>
)

export default TwoCol
