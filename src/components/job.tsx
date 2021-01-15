import React from "react"
import Row from "./row"

const Job = ({ date, title, place, children }) => (
  <Row
    isVCentered={false}
    className="mb-4"
    style={{ paddingLeft: "0.2in", paddingRight: "0.2in" }}
  >
    <div className="w-2/10 mt-2 text-right pr-4">{date}</div>
    <div className="w-8/10">
      <div className="uppercase font-bold text-sm text-blue-900">{title}</div>
      <div className="text-gray-500 text-sm mb-2">{place}</div>
      {children}
    </div>
  </Row>
)

export default Job
