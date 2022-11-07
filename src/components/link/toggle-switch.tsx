"use client"

import { gsap } from "gsap"
import { useEffect, useRef, useState } from "react"
import cn from "../../lib/class-names"
import VCenterRow from "../v-center-row"
import { CheckBoxProps } from "./check-box"
import * as React from "react"

const ORB_SIZE = "20px"

function ToggleSwitch({
  isSelected,
  onClick,
  children,
  className,
}: CheckBoxProps) {
  const [hover, setHover] = useState(false)

  const ref = useRef(null)

  function onMouseEnter() {
    setHover(true)
  }

  function onMouseLeave() {
    setHover(false)
  }

  useEffect(() => {
    gsap.timeline().to(ref.current, {
      duration: 0.3,
      transform: isSelected ? `translateX(12px)` : `translateX(0)`,
      ease: "power3.out",
    })
  }, [isSelected])

  return (
    <VCenterRow
      onClick={() => onClick(!isSelected)}
      className={cn(`w-full cursor-pointer justify-between`, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}

      <VCenterRow
        className={cn(`relative rounded-full`, [
          isSelected,
          "bg-button-blue",
          cn("color-ani", [hover, "bg-gray-300", "bg-gray-200"]),
        ])}
        style={{ width: "34px", height: "22px" }}
      >
        <div
          ref={ref}
          className="absolute rounded-full bg-white"
          style={{
            left: "1px",
            width: ORB_SIZE,
            minWidth: ORB_SIZE,
            height: ORB_SIZE,
          }}
        ></div>
      </VCenterRow>
    </VCenterRow>
  )
}

export default ToggleSwitch
