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
import cn from "../lib/class-names"
import Seo from "../components/seo"

const Title = ({ title }) => {
  return (
    <Row isVCentered={true} className="gap-x-2 mb-3">
      {/* <img
          src="/assets/svg/heading-arrow.svg"
          width="20"
          height="30"
          className="w-5"
        /> */}
      <svg viewBox="0 0 190 30" className="w-40">
        <defs>
          <linearGradient id="rainbow" x1="0" x2="100%" y1="0" y2="0">
            <stop stopColor="#06b6d4" offset="0%" />
            <stop stopColor="#818cf8" offset="50%" />
            <stop stopColor="#fb7185" offset="100%" />
          </linearGradient>
        </defs>
        <text>
          <tspan
            x="0"
            y="25"
            className="text-2xl font-semibold uppercase"
            fill="url(#rainbow)"
          >
            {title}
          </tspan>
        </text>
      </svg>
    </Row>
  )
}

const Skill = ({ title, color = "border-blue-500 text-blue-500" }) => {
  return (
    <Row
      isCentered={true}
      isVCentered={true}
      className={cn("rounded-full text-xs font-medium border px-3 py-1", color)}
    >
      {title}
    </Row>
  )
}

export default function IndexPage({ data }) {
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
        {/* <div className="px-6">
          <h1 className="text-5xl font-extrabold text-center mt-8">
            Antony Holmes
          </h1>

          <Row isVCentered={true} isCentered={true} className="gap-x-4 mt-1">
            <h2 className="text-2xl text-gray-500 font-light uppercase tracking-wide">
              Data Scientist, New York
            </h2>
          </Row>

          <p className="mt-8">
            Data scientist and full stack software developer with 8 years
            experience developing open source software and applications for
            cancer genetics research. Experienced in the full software
            development life-cycle from requirement definition, prototyping,
            design, interface implementation, and maintenance. Excellent written
            and oral communication skills demonstrated by 30 publications.
          </p>
        </div> */}

        <TwoCol className="mt-8">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-y-3 px-4 py-6 rounded-xl bg-gradient-to-b from-gray-200 to-gray-200/80 text-gray-600">
              <Row isVCentered={true} className="gap-x-3">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />

                <div>
                  <BlackLink
                    href="mailto:hello@antonyholmes.dev"
                    ariaLabel={""}
                  >
                    antony@antonyholmes.dev
                  </BlackLink>
                </div>
              </Row>

              <Row isVCentered={true} className="gap-x-3">
                <FontAwesomeIcon icon={faPhone} size="lg" />

                <div>
                  <BlackLink href="tel:3476885690" ariaLabel={""}>
                    (347) 688-5690
                  </BlackLink>
                </div>
              </Row>

              <Row isVCentered={true} className="gap-x-3">
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

            {/* <span className="border-t border-gray-200" /> */}

            <div>
              <Title title="Skills" />

              <div className="flex flex-row flex-wrap gap-x-2 gap-y-1">
                <Skill title="Java" />
                <Skill title="Python" />
                <Skill title="C++" />
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

              <div className="flex flex-row flex-wrap gap-x-2 gap-y-1 mt-4">
                <Skill
                  title="Single Cell"
                  color="border-teal-500 text-teal-500"
                />
                <Skill title="RNA-seq" color="border-teal-500 text-teal-500" />
                <Skill title="ChIP-seq" color="border-teal-500 text-teal-500" />
              </div>
            </div>

            {/* <span className="border-t border-gray-200" /> */}

            <div>
              <Title title="Education" />
              <div className="flex flex-col gap-y-4">
                <Job
                  title="Ph.D Mathematical Biology"
                  place="University of Warwick, UK"
                />

                <Job
                  title="B.Sc Computer Science"
                  place="University of Warwick, UK"
                >
                  <div>First-class honours</div>
                </Job>
              </div>
              {/* <div>
                <div className="font-medium">Ph.D Mathematical Biology</div>
                <div>University of Warwick UK</div>
              </div> */}

              {/* <div className="mt-2">
              <div className="font-bold">M.Sc Computer Science</div>
              <div>University of Warwick UK</div>
            </div> */}

              {/* <div className="mt-2">
                <div className="font-medium">B.Sc Computer Science</div>
                <div>University of Warwick UK</div>
                <div>First-class honours</div>
              </div> */}
            </div>

            {/* <span className="border-t border-gray-200" /> */}

            <div>
              <Title title="Awards" />

              <Job date="2009" title="SIWN Best Paper Award" place="Leipzig" />

              {/* <div className="font-medium">SIWN Best Paper Award</div>
              <div>2009, Leipzig</div> */}
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <div>
              <h1 className="text-4xl font-extrabold">
                Antony Holmes
              </h1>

              <Row
                isVCentered={true}
                isCentered={false}
                className="gap-x-4 mt-1"
              >
                <h2 className="text-xl text-gray-500 font-light uppercase tracking-wide">
                  Data Scientist, New York
                </h2>
                {/* <span className="rounded-full w-2 h-2 bg-gray-300" />
              <h2 className="text-lg text-gray-500">Software Engineer</h2>
              <span className="rounded-full w-2 h-2 bg-gray-300" />
              <h2 className="text-lg text-gray-500">New York</h2> */}
              </Row>

              <p className="mt-6">
                Data scientist and full stack software developer with 8 years
                experience developing open source software and applications for
                cancer genetics research. Experienced in the full software
                development life-cycle from requirement definition, prototyping,
                design, interface implementation, and maintenance. Excellent
                written and oral communication skills demonstrated by 30
                publications.
              </p>
            </div>

            <div>
              <Title title="Work History" />
              <div className="flex flex-col gap-y-4">
                <Job
                  date="2015 - Present"
                  title="Senior Bioinformatics Developer"
                  place="Columbia University"
                  className="shadow-card rounded-xl p-4 -ml-4"
                >
                  <ul className="flex flex-col gap-y-1">
                    {/* <li>
                  Developed web
                  based genomics tools and databases using Java, Python, and
                  Javascript.
                </li> */}
                    <li>
                      Migrated core genomic applications onto AWS cloud
                      infrastructure using <Bold>EC2</Bold>, <Bold>Docker</Bold>
                      , <Bold>S3</Bold> reducing costs by <Bold>90%</Bold>.
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
                      deployment and updates to reduce costs by <Bold>80%</Bold>
                      .
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
                  className="mr-4"
                >
                  <ul className="flex flex-col gap-y-1">
                    {/* <li>
                  Analzed and developed microarray, SNP 6.0, RNA-seq,
                  Chip-seq, and single cell genomic data next generation
                  sequencing tools.
                </li> */}
                    <li>
                      Developed data pipelines using <Bold>Python</Bold>, and{" "}
                      <Bold>R</Bold> to analyze RNA-seq, Chip-seq, and single
                      cell genomic data and reduce analysis time from days/weeks
                      to <Bold>hours</Bold>.
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
                  className="mr-4"
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

            <div>
              <Title title="Volunteering" />

              <Job
                date="2017 - Present"
                title="Tax Team Leader"
                place="New York Cares"
                className="mr-4"
              >
                <ul className="flex flex-col gap-y-1">
                  <li>
                    Certified IRS tax team leader managing small teams of
                    volunteers to help New Yorkers file federal and state tax
                    returns for free.
                  </li>
                  {/* <li>
                  Manage a small team of volunteers as liaison between New York
                  Cares and partner organizations.
                </li> */}
                  <li>
                    Work with clients one-on-one to understand their tax
                    situation.
                  </li>
                  <li>
                    Help low income families save <Bold>$100,000</Bold> in fees
                    per year.
                  </li>
                </ul>
              </Job>
            </div>
          </div>
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

      <Page>
        <div className="p-8">
          <div>
            <Title title="References" />
            <div className="flex flex-col gap-y-1 mt-8 ">
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
        </div>
      </Page>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

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
