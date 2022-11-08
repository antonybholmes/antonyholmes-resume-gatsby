import React from "react"
import IChildrenProps from "../interfaces/children-props"
import Row from "./row"

interface IProps extends IChildrenProps {
  date?: string
  title: string
  place: string
}

const Job = ({ date, title, place, children }: IProps) => (
  <div className="flex flex-col gap-y-1">
    <Row className="justify-between items-center">
      <div>
        <h2 className="font-medium text-lg leading-tight">{title}</h2>
        <Row className="gap-x-2 items-center text-gray-500">
          <h3 className="text-base leading-tight">{place}</h3>
          {date && (
            <>
              <span>|</span>
              <h3 className="text-base leading-tight">{date}</h3>
            </>
          )}
        </Row>
      </div>
    </Row>
    {children}
  </div>
)

export default Job
