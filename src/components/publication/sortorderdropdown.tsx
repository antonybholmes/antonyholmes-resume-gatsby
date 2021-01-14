import React from "react"
import DropdownMenu from "../dropdownmenu"

const ITEMS = [
  { id: 0, title: "Publication Date" },
  { id: 1, title: "Title" },
  { id: 2, title: "Journal" },
  { id: 3, title: "First Author" },
]

type SortDropdownProps = {
  onChange: any
  sortOrder: string
}

const SortOrderDropdown: React.FC<SortDropdownProps> = ({
  sortOrder,
  onChange,
}) => (
  <DropdownMenu title={sortOrder} items={ITEMS} onChange={onChange} w="w-40" />
)

export default SortOrderDropdown
