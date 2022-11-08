import React from "react"
import { graphql, Link } from "gatsby"
import RecentPublications from "../components/publication/recentpublications"
import Layout from "../components/layout"
import Page from "../components/page"
import Row from "../components/row"
import BlueLink from "../components/bluelink"
import BlackLink from "../components/link/black-link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Job from "../components/job"
import Bold from "../components/bold"
import TwoCol from "../components/twocol"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Title = ({ title }) => {
  return (
    <svg viewBox="0 0 180 30" className="w-40 mb-2">
      <defs>
        <linearGradient
          id="rainbow"
          x1="0"
          x2="100%"
          y1="0"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f43f5e" offset="0%" />
          <stop stopColor="#2563eb" offset="100%" />
        </linearGradient>
      </defs>
      <text fill="url(#rainbow)">
        <tspan x="0" y="20" className="text-xl font-bold uppercase">
          {title}
        </tspan>
      </text>
    </svg>
  )
}

const Skill = ({ title }) => {
  return (
    <div className="rounded-full  bg-gradient-to-r from-purple-500 to-blue-600">
      <div
        className="rounded-full px-4 py-1 bg-white font-medium text-blue-800"
        style={{ margin: "2px" }}
      >
        {title}
      </div>
    </div>
  )
}

type IndexProps = {
  data: any
}

const IndexPage = ({ data }) => {
  const { publications } = data.allPublications.nodes[0]

  let pages: any[] = []

  let n = Math.floor(publications.length / 10) + 1

  for (let i = 0; i < n; ++i) {
    pages.push(publications.slice(i * 9, i * 9 + 9))
  }

  return (
    <Layout>
      {/* <SEO title="Home" /> */}
      <Page>
        <div className="pt-8 px-8">
          <>
            <h1 className="text-4xl font-extrabold">Antony Holmes</h1>

            <Row isVCentered={true} className="gap-x-4 mt-1">
              <h2 className="text-xl text-gray-500 font-light">
                Data Scientist, New York
              </h2>
              {/* <span className="rounded-full w-2 h-2 bg-gray-300" />
              <h2 className="text-lg text-gray-500">Software Engineer</h2>
              <span className="rounded-full w-2 h-2 bg-gray-300" />
              <h2 className="text-lg text-gray-500">New York</h2> */}
            </Row>

            <p className="mt-3">
              Data scientist and full stack software developer with 8 years
              experience developing open source software and applications for
              cancer genetics research. Experienced in the full software
              development life-cycle from requirement definition, prototyping,
              design, interface implementation, and maintenance. Excellent
              written and oral communication skills demonstrated by 30
              publications.
            </p>

            {/* <Row className="mt-2 gap-x-8" isCentered={true} isVCentered={true}>
            <Row className="gap-x-1 border border-gray-900 rounded-full px-4 py-2  ">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />

              <div>
                <BlackLink href="mailto:hello@antonyholmes.dev" ariaLabel={""}>
                  hello@antonyholmes.dev
                </BlackLink>
              </div>
            </Row>

            <Row className="gap-x-1 text-gray-600">
              <FontAwesomeIcon icon={faPhone} size="lg" />

              <div>
                <BlackLink href="tel:3476885690" ariaLabel={""}>
                  (347) 688-5690
                </BlackLink>
              </div>
            </Row>

            <Row className="gap-x-1 text-gray-600">
              <FontAwesomeIcon icon={faGithub} size="lg" />

              <div>
                <BlackLink
                  href="https://github.com/antonybholmes"
                  ariaLabel={""}
                >
                  github.com/antonybholmes
                </BlackLink>
              </div>
            </Row>
          </Row> */}
          </>
        </div>
        <TwoCol className="mt-8">
          <div className="flex flex-col gap-y-6">
            <div>
              <Title title="Skills" />

              <div className="flex flex-row flex-wrap gap-2">
                <Skill title="Java" />
                <Skill title="Python" />
                <Skill title="React" />
                <Skill title="Gatsby" />
                <Skill title="TypeScript" />
                <Skill title="PostgreSQL" />
                <Skill title="R" />
                <Skill title="MATLAB" />
                <Skill title="EC2" />
                <Skill title="S3" />
                <Skill title="Lambda" />
                <Skill title="CloudFront" />
                <Skill title="SGE" />
              </div>
            </div>

            <div>
              <Title title="Work History" />

              <Job
                date="2015 - Present"
                title="Senior Bioinformatics Developer"
                place="Columbia University"
              >
                <ul className="flex flex-col gap-y-1">
                  {/* <li>
                  Developed web
                  based genomics tools and databases using Java, Python, and
                  Javascript.
                </li> */}
                  <li>
                    Migrated core genomic applications onto AWS cloud
                    infrastructure using <Bold>EC2</Bold>, <Bold>Docker</Bold>,{" "}
                    <Bold>S3</Bold> reducing costs by <Bold>90%</Bold>.
                  </li>
                  <li>
                    Created departmental{" "}
                    <BlackLink
                      href="https://wwww.columbiaicg.org"
                      ariaLabel={""}
                    >
                      web site
                    </BlackLink>{" "}
                    using <Bold>Gatsby</Bold>+<Bold>Typescript</Bold> to ease
                    deployment and updates to reduce costs by <Bold>80%</Bold>.
                  </li>
                  {/* <li>
                Data scientist designing pipelines for analyzing single cell,
                ChIP-seq, and RNA-seq data.
              </li> */}

                  {/* <li>
                  Developed genomic web applications running
                  on AWS using <Bold>Django</Bold>, and <Bold>Postgresql</Bold>{" "}
                  to allow users access to core lab data.
                </li> */}
                  {/* <li>
                Ported applications into Node + Electron + React JS framework
                for improved UI and integration with web services.
              </li> */}
                </ul>
              </Job>

              <Job
                date="2012 - 2015"
                title="Associate Research Scientist"
                place="Columbia University"
              >
                <ul className="flex flex-col gap-y-1">
                  {/* <li>
                  Analzed and developed microarray, SNP 6.0, RNA-seq,
                  Chip-seq, and single cell genomic data next generation
                  sequencing tools.
                </li> */}
                  <li>
                    Developed data pipelines using <Bold>Python</Bold>, and{" "}
                    <Bold>R</Bold> to analyze RNA-seq, Chip-seq, and single cell
                    genomic data and reduce analysis time from days/weeks to{" "}
                    <Bold>hours</Bold>.
                  </li>
                  {/* <li>
                  Created desktop applications for scientists to analyse
                  data on their own available on{" "}
                  <BlackLink
                    href="https://github.com/antonybholmes/matcalc"
                    ariaLabel={""}
                  >
                    GitHub
                  </BlackLink>
                  .
                </li> */}
                  <li>
                    Published over <Bold>25</Bold> articles on B-cell
                    development and cancer genetics in high impact journals,
                    including Nature, Cell, Blood, PNAS, and the New England
                    Journal of Medicine.
                  </li>
                </ul>
              </Job>

              <Job
                date="2009 - 2012"
                title="Post Doctoral Research Scientist"
                place="Columbia University"
              >
                <ul className="flex flex-col gap-y-1">
                  {/* <li>
                  Data mined electronic health records (EHR) at New York
                  Presbyterian Hospital.
                </li> */}
                  <li>
                    Administrator of research version of the New York
                    Presbyterian Hospital electronic health records (EHR)
                    database for data mining.
                  </li>
                  <li>
                    Studied the predictive power of hospital records for
                    discovering novel relationships between rare diseases and
                    co-morbidities resulting in three publications.
                  </li>
                </ul>
              </Job>
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-6 border border-gray-300 rounded-2xl p-4">
              <div className="flex flex-col gap-y-2 ">
                <Row className="gap-x-2  text-blue-500">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />

                  <div>
                    <BlackLink
                      href="mailto:hello@antonyholmes.dev"
                      ariaLabel={""}
                    >
                      hello@antonyholmes.dev
                    </BlackLink>
                  </div>
                </Row>

                <Row className="gap-x-2">
                  <FontAwesomeIcon icon={faPhone} size="lg" />

                  <div>
                    <BlackLink href="tel:3476885690" ariaLabel={""}>
                      (347) 688-5690
                    </BlackLink>
                  </div>
                </Row>

                <Row className="gap-x-2 ">
                  <FontAwesomeIcon icon={faGithub} size="lg" />

                  <div>
                    <BlackLink
                      href="https://github.com/antonybholmes"
                      ariaLabel={""}
                    >
                      github.com/antonybholmes
                    </BlackLink>
                  </div>
                </Row>
              </div>
            </div>
            <div className="flex flex-col gap-y-6 border border-gray-300 rounded-2xl p-4">
              <div>
                <Title title="Education" />

                <div>
                  <div className="font-medium">Ph.D Mathematical Biology</div>
                  <div>University of Warwick UK</div>
                </div>

                {/* <div className="mt-2">
              <div className="font-bold">M.Sc Computer Science</div>
              <div>University of Warwick UK</div>
            </div> */}

                <div className="mt-2">
                  <div className="font-medium">B.Sc Computer Science</div>
                  <div>University of Warwick UK</div>
                  <div>First-class honours</div>
                </div>
              </div>

              <div>
                <Title title="Awards" />

                <div className="font-medium">SIWN Best Paper Award</div>
                <div>2009, Leipzig</div>
              </div>
            </div>

            <div className="flex flex-col gap-y-6 border border-gray-300 rounded-2xl p-4">
              <div>
                <Title title="Volunteering" />

                <Job
                  date="2017 - Present"
                  title="Tax Team Leader"
                  place="New York Cares"
                >
                  <ul className="flex flex-col gap-y-1">
                    <li>
                      Certified as IRS tax team leader to help New Yorkers file
                      tax returns for free during tax season.
                    </li>
                    {/* <li>
                  Manage a small team of volunteers as liaison between New York
                  Cares and partner organizations.
                </li> */}
                    <li>
                      Work with clients one-on-one to understand their tax
                      situation and prepare their federal and state returns
                      saving them <Bold>$100,000</Bold> in fees per year.
                    </li>
                  </ul>
                </Job>
              </div>
            </div>
          </div>
        </TwoCol>
      </Page>

      <Page>
        <TwoCol className="p-8">
          <>
            <div>
              <Title title="References" />
              <div className="flex flex-col gap-y-1">
                <div className="mb-4">
                  <div className="font-medium">Prof. Riccardo Dalla-Favera</div>
                  {/* <div>Institute for Cancer Genetics</div> */}
                  <div>Columbia University, New York</div>
                  <div>
                    <BlueLink href="mailto:rd10@columbia.edu" ariaLabel={""}>
                      rd10@columbia.edu
                    </BlueLink>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="font-medium">Prof. Katia Basso</div>
                  {/* <div>Institute for Cancer Genetics</div> */}
                  <div>Columbia University, New York</div>
                  <div>
                    <BlueLink
                      href="mailto:kb451@cumc.columbia.edu"
                      ariaLabel={""}
                    >
                      kb451@cumc.columbia.edu
                    </BlueLink>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="font-medium">Prof. Raul Rabandan</div>
                  {/* <div>Department of Systems Biology</div> */}
                  <div>Columbia University, New York</div>
                  <div>
                    <BlueLink
                      href="mailto:rr2579@cumc.columbia.edu"
                      ariaLabel={""}
                    >
                      rr2579@cumc.columbia.edu
                    </BlueLink>
                  </div>
                </div>
              </div>
            </div>
          </>
          <></>
        </TwoCol>
      </Page>

      {pages.map((page, index) => {
        return (
          <Page key={index}>
            <div className="p-8">
              <Title title="Publications" />
              <div>
                <RecentPublications
                  publications={publications}
                  showAbstract={false}
                  showMoreButton={false}
                  showCount={false}
                  showIndices={true}
                  start={index * 9}
                  recordsPerPage={9}
                />
              </div>
            </div>
          </Page>
        )
      })}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allPublications: allPublicationsJson {
      nodes {
        publications {
          pmid
          pmcid
          doi
          title
          abstract
          authorList
          authors
          journal
          volume
          year
          month
          day
        }
      }
    }
  }
`
