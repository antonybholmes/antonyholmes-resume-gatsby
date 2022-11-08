import React from "react"
import IChildrenProps from "../interfaces/children-props"
import Row from "./row"

interface IProps extends IChildrenProps {
  date?: string
  title: string
  place: string
}

const Job = ({ date , title, place, children }:IProps) => (
  <Row className="justify-between mb-4">
    <div>
      <h2 className="font-medium text-lg leading-tight">{title}</h2>
      <h3 className="text-lg gap-x-4 leading-tight">{place}
      </h3>
      {date && <h4 className="text-gray-400 mb-2 leading-tight">{date}</h4>}
      {children}
    </div>
  </Row>
)

export default Job
