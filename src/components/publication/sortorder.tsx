import React, { useState } from "react"
import Row from "../row"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import FullDiv from "../fulldiv"

const ITEMS = ["Publication Date", "Title", "Journal", "First Author"]

type SortItemProps = {
  index: number
  selected: string
  text: string
  onChange: any
}

const SortItem: React.FC<SortItemProps> = ({
  index,
  selected,
  text,
  onChange,
}) => {
  const on = text === selected
  return (
    <Row
      onClick={() => onChange(text, index)}
      className={`cursor-pointer trans-ani justify-between mb-2 ${
        on ? "text-columbia-button-blue" : ""
      }`}
    >
      <div className="pr-16">{text}</div>
      <Row
        isCentered={true}
        className={`bg-white rounded-full overflow-hidden border-2 border-solid trans-ani ${
          on ? " border-columbia-button-blue" : "border-gray-300"
        }`}
      >
        {/* <div className={`trans-ani ${on ? "opacity-100" : "opacity-0"}`}>
          <FontAwesomeIcon icon="check" className={`text-sm`} />
        </div> */}

        <div
          className={`text-white rounded-full trans-ani m-1 ${
            on ? "bg-columbia-button-blue" : "bg-white"
          }`}
          style={{ width: "0.8rem", height: "0.8rem" }}
        />
      </Row>
    </Row>
  )
}

type SortOrderProps = {
  onChange: any
  selected: string
}

const SortOrder: React.FC<SortOrderProps> = ({ selected, onChange }) => {
  //const [selectedIndex, setSelectedIndex] = useState(0)

  const _handleChange = (text: string, index: number) => {
    onChange(text)
  }

  return (
    <div>
      {/* <div>
        <h6 className="font-bold">Sort By</h6>
      </div> */}

      {ITEMS.map((text: string, index: number) => {
        return (
          <SortItem
            key={index}
            index={index}
            selected={selected}
            text={text}
            onChange={_handleChange}
          />
        )
      })}
    </div>
  )
}

export default SortOrder
