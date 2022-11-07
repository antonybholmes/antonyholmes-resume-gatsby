import React from "react"
import Row from "./row"

const Job = ({ date, title, place, children }) => (
  <Row className="justify-between mb-4">
    <div>
      <div className="font-bold ">{title}</div>
      <Row className="font-light gap-x-4 text-gray-600 mb-2 ">
        <span className="">{place}</span>{" "}
        <span className="border-l border-gray-400" /> <span>{date}</span>
      </Row>
      {children}
    </div>
  </Row>
)

export default Job
