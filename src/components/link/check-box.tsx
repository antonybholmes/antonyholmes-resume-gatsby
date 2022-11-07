import { useState } from "react"
import cn from "../../lib/class-names"
import IChildrenProps from "../../interfaces/children-props"
import CheckMark from "./check-mark"
import * as React from "react"

export interface CheckBoxProps extends IChildrenProps {
  isSelected: boolean
  onClick: (selected: boolean) => void
}

function CheckBox({
  isSelected = false,
  onClick,
  className,
  children,
}: CheckBoxProps) {
  const [hover, setHover] = useState(false)

  function onMouseEnter() {
    setHover(true)
  }

  function onMouseLeave() {
    setHover(false)
  }

  return (
    <button
      onClick={() => onClick(!isSelected)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        `flex cursor-pointer flex-row items-center gap-x-2 py-1`,
        className
      )}
    >
      <CheckMark selected={isSelected} hover={hover} />

      <div>{children}</div>

      {/* <Row
        isCentered={true}
        className={`w-6 h-6 border border-solid rounded-full trans-ani ${
          selected
            ? "bg-cuimc-button-blue-80 border-transparent text-white"
            : "border-gray-300 bg-white"
        }`}
      >
        {selected && (
          <div>
            <FontAwesomeIcon icon="check" className={`text-sm`} />
          </div>
        )}
      </Row> */}

      {/* {selected && (
          <div>
            <FontAwesomeIcon icon="check" className={`text-cuimc-button-blue-80`} />
          </div>
        )} */}
    </button>
  )
}

export default CheckBox
