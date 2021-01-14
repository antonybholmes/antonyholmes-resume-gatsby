/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import BasePublication from "./basepublication"
import OutlineCard from "../outlinecard"
import FlatCard from "../flatcard"

type PublicationListProps = {
  publications: Array<any>
  start?: number
  showIndices?: boolean
  showLabLink?: boolean
  onPubClick?: any
  showAbstract?: boolean
}

// Space is only added to intermediate elements of the list so that
// wasted space at the bottom is removed

const BasePublicationList: React.FC<PublicationListProps> = ({
  publications,
  start,
  showIndices,
  showLabLink,
  showAbstract,
  onPubClick,
}) => (
  <ul>
    {publications.map((publication: any, index: number) => (
      <li
        className={` ${index < publications.length - 1 ? "mb-2" : ""}`}
        key={start + index}
      >
        {/* <FlatCard autoHide={false}> */}
        <BasePublication
          publication={publication}
          index={showIndices ? start + index + 1 : -1}
          onPubClick={onPubClick}
          showAbstract={showAbstract}
        />
        {/* </FlatCard> */}
      </li>
    ))}
  </ul>
)

BasePublicationList.defaultProps = {
  start: 0,
  showLabLink: false,
  showIndices: false,
  onPubClick: null,
  showAbstract: true,
}

export default BasePublicationList
