import React, { useRef, useState } from "react"
import Row from "../row"

const friendlyUrl = (url: string) => {
  return url
    .replace(/http[s]?/, "")
    .replace("://", "")
    .replace(/\/$/, "")
    .replace(/\//g, " > ")
}

type FriendlyUrlProps = {
  url: string
}

type AbstractProps = {
  publication: any
  maxWords?: number
}

const Abstract: React.FC<AbstractProps> = ({ publication, maxWords }) => {
  const [expanded, setExpanded] = useState(false)
  const [words, setWords] = useState(publication.abstract.split(" "))

  return (
    <>
      <div className={`relative text-sm mt-2 trans-ani`}>
        <p
          className={`cursor-pointer trans-ani hover:text-columbia-button-blue ${
            expanded ? "" : "truncate"
          }`}
          onClick={() => setExpanded(!expanded)}
        >
          {publication.abstract}
        </p>

        {/* {!expanded && (
          <Row
            isCentered={true}
            className="absolute bottom-0 w-full h-full cursor-pointer hover:text-blue-500 trans-ani"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,1) 100%)",
            }}
            onClick={() => setExpanded(true)}
          >
            <div>
              <FontAwesomeIcon icon="chevron-down" />
            </div>
          </Row>
        )} */}
      </div>

      {/* <Row
        isCentered={true}
        className="w-full cursor-pointer hover:text-blue-500 trans-ani"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <FontAwesomeIcon icon={expanded ? "chevron-up" : "chevron-down"} />
        </div>
      </Row> */}

      {/* <RightDiv className="text-sm mt-1">
        <button
          className="text-gray-500 hover:text-default-blue trans-ani"
          onClick={() => setExpanded(!expanded)}
        >{`Read ${expanded ? "less" : "more"}`}</button>
      </RightDiv> */}
    </>
  )
}

Abstract.defaultProps = {
  maxWords: 32,
}

/**
 * Format author list into string.
 *
 * @param {*} authors
 * @param {int} maxAuthors
 */
const authorString = (authors: Array<any>, maxAuthors: number = 10) => {
  const strs = []

  if (authors.length <= maxAuthors || maxAuthors === -1) {
    for (const author of authors) {
      strs.push(author) //.lastName + " " + author.initials)
    }
  } else {
    for (let i = 0; i < 3; ++i) {
      strs.push(authors[i]) //.lastName + " " + authors[i].initials)
    }

    strs.push("...")

    const n = authors.length - 1
    strs.push(authors[n]) //.lastName + " " + authors[n].initials)
  }

  let ret = strs.join(", ")
  ret = ret.replace(/, ([^,]+)$/, ", and $1")

  return ret
}

type PubDataProps = {
  text: string
  data: string
  onClick: any
  className?: string
}

const PubData: React.FC<PubDataProps> = ({
  text,
  data,
  onClick,
  className,
}) => (
  <span
    className={`cursor-pointer hover:text-default-blue trans-ani ${className}`}
    onClick={() => onClick(data)}
  >
    {text}
  </span>
)

PubData.defaultProps = {
  className: "",
}

const useAuthors = (
  authors: Array<any>,
  maxAuthors: number = 10,
  onClick: any
) => {
  const ret: Array<any> = []

  if (authors.length <= maxAuthors || maxAuthors === -1) {
    authors.map((author: string, index: number) => {
      ret.push(
        <PubData
          text={author}
          data={`"${author}"[author]`}
          onClick={onClick}
          key={`author-${index}`}
        />
      )

      if (index < authors.length - 1) {
        ret.push(
          <span key={`sep-${index}`}>
            {`, ${index === authors.length - 2 ? "and " : ""}`}
          </span>
        )
      }
    })
  } else {
    for (let i = 0; i < 3; ++i) {
      ret.push(authors[i]) //.lastName + " " + authors[i].initials)
    }

    ret.push("...")

    const n = authors.length - 1
    ret.push(authors[n]) //.lastName + " " + authors[n].initials)
  }

  //let ret = ret.join(", ")
  //ret = ret.replace(/, ([^,]+)$/, ", and $1")

  return ret
}

export const pubmedUrl = (pubmed: number) => {
  return `https://pubmed.ncbi.nlm.nih.gov/${pubmed}/` //``https://www.ncbi.nlm.nih.gov/pubmed/?term=${pubmed}`
}

export const doiUrl = (doi: string) => {
  return `https://doi.org/${doi}`
}

type BasePublicationProps = {
  publication: any
  index?: number
  onPubClick?: any
  showAbstract?: boolean
  showUrl?: boolean
}

const BasePublication = ({
  publication,
  index,
  showAbstract,
  showUrl,
  onPubClick,
}:BasePublicationProps) => {
  const _handleJournalClick = (journal: string) => {
    if (onPubClick !== null) {
      onPubClick(journal)
    }
  }

  return (
    <>
      <div className="text-base font-semibold m-0">{`${
        index !== -1 ? `${index}. ` : ""
      } ${publication.title}`}</div>

      <p className="m-0 text-gray-600" dangerouslySetInnerHTML={{__html:publication.authors.replace('Holmes AB', '<strong>Holmes AB</strong>')}} />

      {/* <Row> */}
      <Row>
        {onPubClick !== null ? (
          <>
            <PubData
              text={`${publication.journal}.`}
              data={`"${publication.journal}"[journal]`}
              onClick={_handleJournalClick}
              className="mr-1"
            />
            {publication.year !== -1 && (
              <PubData
                text={`${publication.year.toString()}.`}
                data={`${publication.year.toString()}[year]`}
                onClick={_handleJournalClick}
                className="mr-1"
              />
            )}
            {/* {publication.tagList.includes("In Press") && (
              <div className="text-sm mr-1">{`In Press.`}</div>
            )} */}
          </>
        ) : (
          <>
            <div className="mr-1">{`${publication.journal}.`}</div>
            {publication.year !== -1 && (
              <div className="mr-1">{`${publication.year.toString()}.`}</div>
            )}
            {/* {publication.tagList.includes("In Press") && (
              <div className="text-sm mr-1">{`In Press.`}</div>
            )} */}
          </>
        )}
      </Row>

      {/* <Row className="text-sm">
        {publication.pmid !== "" && (
          <div className="mr-4">
            {`PMID: `}
            {publication.pmid}
          </div>
        )}
        {publication.doi !== "" && (
          <div className="mr-4">
            {`DOI: `}
            {publication.doi}
          </div>
        )}
        {publication.isbn !== "" && (
          <div className="mr-4">{publication.isbn}</div>
        )}
      </Row> */}

      {showAbstract && publication.abstract !== "" && (
        // <Row className="text-columbia-secondary-blue-90 items-center">
        //   <PubMedLink publication={publication} />

        //   <GoogleScholarLink publication={publication} />
        // </Row>

        <Abstract publication={publication} />
      )}
    </>
  )
}

BasePublication.defaultProps = {
  index: -1,
  onPubClick: null,
  showAbstract: true,
  showUrl: false,
}

export default BasePublication
