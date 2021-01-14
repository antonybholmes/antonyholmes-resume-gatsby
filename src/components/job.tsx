import React from "react"
import Row from "./row"

const Job = ({ date, title, place, children }) => (
  <Row isVCentered={false} className="mb-4">
    <div className="w-2/10">{date}</div>
    <div className="w-8/10">
      <div className="uppercase font-bold text-blue-900">{title}</div>
      <div className="text-gray-700 mb-2">{place}</div>
      {children}
    </div>
  </Row>
)

export default Job
