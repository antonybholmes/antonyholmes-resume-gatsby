import React from "react"
import { graphql, Link } from "gatsby"
import RecentPublications from "../components/publication/recentpublications"
import Layout from "../components/layout"
import Page from "../components/page"
import Row from "../components/row"
import BlueLink from "../components/bluelink"
import BlackLink from "../components/link/black-link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ColorLink from "../components/colorlink"
import Job from "../components/job"
import Bold from "../components/bold"
import TwoCol from "../components/twocol"
import SideTitle from "../components/sidetitle"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import TwinCol from "../components/twincol"

const Title = ({ title }) => {
  return (
    <svg viewBox="0 0 180 30" className="w-40 mb-1">
      <defs>
        <linearGradient
          id="rainbow"
          x1="0"
          x2="100%"
          y1="0"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#f43f5e" offset="0%" />
          <stop stop-color="#2563eb" offset="100%" />
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

type IndexProps = {
  data: any
}

const IndexPage = ({ data }) => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <Page> {/*style={{background: "url( /waves.svg ) no-repeat top center", backgroundSize: '100% auto'}}>*/}
      <div className="pt-8 px-8">
        <>
          <h1 className="text-4xl font-bold">Antony Holmes</h1>

          <h1 className="text-lg text-gray-500">Software Engineer</h1>

          <p className="mt-2">
            Data scientist and full stack software developer with 8 years
            experience developing open source software and applications for
            cancer genetics research. Experienced in the full software
            development life-cycle from requirement definition, prototyping,
            design, interface implementation, and maintenance. Excellent written
            and oral communication skills demonstrated by more than 25
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

            <div className="font-semibold">Programming Languages</div>
            <div className="grid grid-cols-4 gap-2">
              <div>
                <div className="font-semibold text-gray-500">Java</div>
                <div>Swing, Spring Boot, Maven</div>
              </div>
              <div>
                <div className="font-semibold text-gray-500">Python</div>
                <div>Pandas, Numpy, Scikit-learn, Django</div>
              </div>
              <div>
                <div className="font-semibold text-gray-500">Web</div>
                <div>React, Electron, Gatsby, NextJS, TypeScript</div>
              </div>
              <div>
                <div className="font-semibold text-gray-500">Databases</div>
                <div>PostgreSQL, MySQL, Sqlite</div>
              </div>
              <div>
                <div className="font-semibold text-gray-500">Math</div>
                <div>R, MATLAB</div>
              </div>
            </div>

            <div className="font-semibold mt-4">Software Development</div>
            <div className="grid grid-cols-4 gap-2">
              <div>
                <div className="font-semibold text-gray-500">AWS</div>
                <div>EC2, S3, Lambda, CloudFront, API Gateway</div>
              </div>
              <div>
                <div className="font-semibold text-gray-500">Development</div>
                <div>Visual Studio Code, Eclipse, GitHub</div>
              </div>

              <div>
                <div className="font-semibold text-gray-500">Cluster</div>
                <div>SGE, BSUB </div>
              </div>
              <div>
                <div className="font-semibold text-gray-500">Office</div>
                <div>
                  Microsoft Office with VBA, LaTeX, Inkscape, Photoshop,
                  Illustrator
                </div>
              </div>
            </div>
          </div>

          <div>
            <Title title="Work History" />

            <Job
              date="2015 - Present"
              title="Senior Bioinformatics Developer"
              place="Columbia University"
            >
              <ul className="list-disc ml-5 flex flex-col gap-y-1">
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
                  Created Institute for Cancer Genetics departmental{" "}
                  <BlackLink href="https://wwww.columbiaicg.org" ariaLabel={""}>
                    web site
                  </BlackLink>{" "}
                  using <Bold>Gatsby</Bold>+<Bold>Typescript</Bold> to implement
                  modern web standards, ease deployment and updates, and reduce
                  costs by 80%.
                </li>
                {/* <li>
                Data scientist designing pipelines for analyzing single cell,
                ChIP-seq, and RNA-seq data.
              </li> */}

                <li>
                  Developed multi-user database genomic web applications running
                  on AWS using <Bold>Django</Bold>, and <Bold>Postgresql</Bold>{" "}
                  to allow users remote access to core lab data and analysis to
                  improve productivity.
                </li>
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
              <ul className="list-disc ml-5 flex flex-col gap-y-1">
                {/* <li>
                  Analzed and developed microarray, SNP 6.0, RNA-seq,
                  Chip-seq, and single cell genomic data next generation
                  sequencing tools.
                </li> */}
                <li>
                  Developed cluster based data pipelines using{" "}
                  <Bold>Python</Bold>, <Bold>R</Bold>, and <Bold>BASH</Bold> to
                  analyze microarray, SNP 6.0, RNA-seq, Chip-seq, and single
                  cell genomic data that reduced processing time from days/weeks
                  to <Bold>hours</Bold>.
                </li>
                <li>
                  Created Java desktop applications for scientists to analyse
                  data on their own available on{" "}
                  <BlackLink
                    href="https://github.com/antonybholmes/matcalc"
                    ariaLabel={""}
                  >
                    GitHub
                  </BlackLink>
                  .
                </li>
                <li>
                  Published over <Bold>25</Bold> articles on B-cell development
                  and cancer genetics in high impact journals, including Nature,
                  Cell, Blood, PNAS, and the New England Journal of Medicine.
                </li>
              </ul>
            </Job>

            <Job
              date="2009 - 2012"
              title="Post Doctoral Research Scientist"
              place="Columbia University"
            >
              <ul className="list-disc ml-5 flex flex-col gap-y-1">
                {/* <li>
                  Data mined electronic health records (EHR) at New York
                  Presbyterian Hospital.
                </li> */}
                <li>
                  Served as database administrator and created research version
                  of the New York Presbyterian Hospital electronic health
                  records (EHR) for data mining.
                </li>
                <li>
                  Studied patterns of influenza to look for predictive power in
                  hospital records for New York public health.
                </li>
                <li>
                  Discovered novel relationships between rare diseases and
                  co-morbidities which were developed into <Bold>MATLAB</Bold>{" "}
                  and <Bold>Java</Bold> applications to offer potential avenues
                  for new therapeutics. This work resulted in three
                  publications.
                </li>
              </ul>
            </Job>
          </div>

          
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col mt-2 gap-y-2 border border-gray-300 rounded-2xl px-6 py-4">
            <Row className="gap-x-2  text-blue-500">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />

              <div>
                <BlackLink href="mailto:hello@antonyholmes.dev" ariaLabel={""}>
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

          <div>
            <Title title="Education" />

            <div>
              <div className="font-bold">Ph.D Mathematical Biology</div>
              <div>University of Warwick UK</div>
            </div>

            {/* <div className="mt-2">
              <div className="font-bold">M.Sc Computer Science</div>
              <div>University of Warwick UK</div>
            </div> */}

            <div className="mt-2">
              <div className="font-bold">B.Sc Computer Science</div>
              <div>University of Warwick UK</div>
              <div>First-class honours</div>
            </div>
          </div>

          <div>
            <Title title="Awards" />

            <div className="font-bold">SIWN Best Paper Award</div>
            <div>2009, Leipzig</div>
          </div>

          <div>
            <Title title="Volunteering" />

            <Job
              date="2017 - Present"
              title="Tax Team Leader"
              place="New York Cares"
            >
              <ul className="list-disc ml-5 flex flex-col gap-y-1">
                <li>
                  Certified as IRS tax preparer to help New Yorkers file tax
                  returns for free during tax season.
                </li>
                <li>
                  Work with clients one-on-one to understand their tax situation
                  and prepare their federal and state returns.
                </li>
                <li>
                  Manage a small team of volunteers as liaison between
                  New York Cares and partner organizations.
                </li>
                {/* <li>Quality review tax returns for accuracy before filing.</li> */}
                <li>
                  Save clients <Bold>$100,000</Bold> in fees per year.
                </li>
              </ul>
            </Job>
          </div>
        </div>
      </TwoCol>

      <TwoCol className="mt-8">
        <Title title="Volunteering" />

        <div>
          <Job
            date="2017 - Present"
            title="Tax Team Leader"
            place="New York Cares"
          >
            <ul>
              <li>
                IRS certified tax preparer helping New Yorkers file their tax
                returns for free during tax season.
              </li>
              <li>
                Work with clients one-on-one to understand their tax situation
                and prepare their federal and state returns.
              </li>
              <li>
                Save clients <Bold>$30,000</Bold> in fees per year.
              </li>
              <li>
                Manage a small team of volunteers and act as a liaison between
                New York Cares and partner organizations.
              </li>
              <li>Quality review tax returns for accuracy before filing.</li>
            </ul>
          </Job>
        </div>
      </TwoCol>

      <TwoCol className="mt-8">
        <h2 className="uppercase text-right bg-sky-400 py-1 px-4 text-white">
          Education
        </h2>
        <TwinCol>
          <>
            <div className="mb-4">
              <div className="font-bold">Ph.D Mathematical Biology</div>
              <div>2009, University of Warwick UK</div>
              {/* <p className="italic">
                  Understanding morphogenesis in myxobacteria from a theoretical
                  and experimental perspective
                </p> */}
              <div>SIWN Best Paper Award</div>
            </div>

            <div>
              <div className="uppercase font-semibold tracking-wide">
                M.Sc Computer Science
              </div>
              <div>2004, University of Warwick UK</div>
            </div>
          </>
          <>
            <div>
              <div className="uppercase font-semibold tracking-wide">
                B.Sc Computer Science
              </div>
              <div>2003, University of Warwick UK</div>
              <div>First-class honours</div>
            </div>
          </>
        </TwinCol>
      </TwoCol>
    </Page>

    <Page>
      <TwoCol>
        <div>
          <SideTitle>Education</SideTitle>
          <div
            className="mt-4"
            style={{ paddingLeft: "0.15in", paddingRight: "0.15in" }}
          >
            <p style={{ marginTop: "0.1in" }}></p>

            <Row isVCentered={false}>
              <div>
                <div className="uppercase font-semibold tracking-wide">
                  Ph.D Mathematical Biology
                </div>
                <div>2009, University of Warwick UK</div>
                {/* <p className="italic">
                  Understanding morphogenesis in myxobacteria from a theoretical
                  and experimental perspective
                </p> */}
                <div>SIWN Best Paper Award</div>
              </div>
            </Row>

            <Row className="mt-4">
              <div>
                <div className="uppercase font-semibold tracking-wide">
                  M.Sc Computer Science
                </div>
                <div>2004, University of Warwick UK</div>
              </div>
            </Row>

            <Row className="mt-4">
              <div>
                <div className="uppercase font-semibold tracking-wide">
                  B.Sc Computer Science
                </div>
                <div>2003, University of Warwick UK</div>
                <div>First-class honours</div>
              </div>
            </Row>
          </div>
        </div>
        <div style={{ padding: "0.2in" }}>
          <Title>Volunteer Work</Title>

          <Job
            date="2017-present"
            title="Tax Team Leader"
            place="New York Cares"
          >
            <ul>
              <li>
                IRS certified tax preparer helping New Yorkers file their tax
                returns for free during tax season.
              </li>
              <li>
                Work with clients one-on-one to understand their tax situation
                and prepare their federal and state returns.
              </li>
              <li>
                Save clients <Bold>$30,000</Bold> in fees per year.
              </li>
              <li>
                Manage a small team of volunteers and act as a liaison between
                New York Cares and partner organizations.
              </li>
              <li>Quality review tax returns for accuracy before filing.</li>
            </ul>
          </Job>

          <Title className="mt-6">Skills</Title>

          <Row
            isVCentered={false}
            className="mt-2"
            style={{ paddingLeft: "0.15in", paddingRight: "0.15in" }}
          >
            <div className="w-2/10 border-r border-solid border-blue-500 text-blue-500 font-semibold text-right pr-2 mr-2">
              Programming Languages
            </div>
            <div className="w-8/10">
              <table className="w-full" style={{ tableLayout: "fixed" }}>
                <tr>
                  <td>
                    <div className="text-blue-400">Java</div>
                    <div>Swing, JavaFX, Apache-Math, Spring Boot, Maven</div>
                  </td>
                  <td>
                    <div className="text-blue-400">Python</div>
                    <div>Pandas, Numpy, Scikit-learn, Django</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="text-blue-400">Web</div>
                    <div>
                      Node, React, Electron, Gatsby, JSX, TypeScript, HTML/CSS
                    </div>
                  </td>
                  <td>
                    <div className="text-blue-400">Databases</div>
                    <div>PostgreSQL, MySQL, Sqlite</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="text-blue-400">Math</div>
                    <div>R, MATLAB</div>
                  </td>
                  <td></td>
                </tr>
              </table>
            </div>
          </Row>

          <Row
            isVCentered={false}
            className="mt-4"
            style={{ paddingLeft: "0.15in", paddingRight: "0.15in" }}
          >
            <div className="w-2/10 border-r border-solid border-green-400 text-green-400 font-semibold text-right mr-2 pr-2">
              Software Development
            </div>
            <div className="w-8/10">
              <table className="w-full" style={{ tableLayout: "fixed" }}>
                <tr>
                  <td>
                    <div className="text-green-400">AWS</div>
                    <div>EC2, S3, Lambda, CloudFront, API Gateway</div>
                  </td>
                  <td>
                    <div className="text-green-400">Development</div>
                    <div>Eclipse, Visual Studio Code, Git</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="text-green-400">Cluster</div>
                    <div>SGE, BSUB </div>
                  </td>
                  <td>
                    <div className="text-green-400">Office</div>
                    <div>
                      Microsoft Office with VBA, LaTeX, Inkscape, Photoshop,
                      Illustrator
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </Row>

          <Row
            isVCentered={false}
            className="mt-4"
            style={{ paddingLeft: "0.15in", paddingRight: "0.15in" }}
          >
            <div className="w-2/10 border-r border-solid border-red-400 text-red-400 font-semibold text-right mr-2 pr-2">
              Bioinformatics
            </div>
            <div className="w-8/10">
              <table className="w-full" style={{ tableLayout: "fixed" }}>
                <tr>
                  <td>
                    <div className="text-red-400">Sequencing</div>
                    <div>Bowtie, Hisat2, STAR, ChIPseeqer, 10x Cell Ranger</div>
                  </td>
                  <td>
                    <div className="text-red-400">Tools</div>
                    <div>GSEA, GenePattern, BLAST</div>
                  </td>
                </tr>
              </table>
            </div>
          </Row>

          <p
            className="xs text-gray-500 mt-4"
            style={{
              paddingLeft: "0.2in",
              paddingRight: "0.2in",
            }}
          >
            Source code for this resume is available at:{" "}
            <ColorLink
              color="gray"
              to="https://github.com/antonybholmes/resume"
            >
              github.com/antonybholmes/resume
            </ColorLink>
          </p>

          <Title className="mt-6">References</Title>

          <Row
            wrap={true}
            className="mt-2"
            style={{ paddingLeft: "0.15in", paddingRight: "0.15in" }}
          >
            <div className="w-1/2 mb-4">
              <div className="font-semibold">Prof. Riccardo Dalla-Favera</div>
              <div>Institute for Cancer Genetics</div>
              <div>Columbia University</div>
              <div>New York</div>
              <div>
                <BlueLink to="mailto:rd10@columbia.edu">
                  rd10@columbia.edu
                </BlueLink>
              </div>
            </div>
            <div className="w-1/2 mb-4">
              <div className="font-semibold">Prof. Katia Basso</div>
              <div>Institute for Cancer Genetics</div>
              <div>Columbia University</div>
              <div>New York</div>
              <div>
                <BlueLink to="mailto:kb451@cumc.columbia.edu">
                  kb451@cumc.columbia.edu
                </BlueLink>
              </div>
            </div>
            <div className="w-1/2 mb-4">
              <div className="font-semibold">Prof. Raul Rabandan</div>
              <div>Department of Systems Biology</div>
              <div>Columbia University</div>
              <div>New York</div>
              <div>
                <BlueLink to="mailto:rr2579@cumc.columbia.edu">
                  rr2579@cumc.columbia.edu
                </BlueLink>
              </div>
            </div>
          </Row>
        </div>
      </TwoCol>
    </Page>

    <Page>
      <div style={{ padding: "0.2in" }}>
        <Title>Publications</Title>
        <div style={{ padding: "0.15in" }}>
          <RecentPublications
            publications={data.allPublications.edges[0].node.publications}
            showAbstract={false}
            showMoreButton={false}
            showCount={false}
            showIndices={true}
            top={12}
          />
        </div>
      </div>
    </Page>

    <Page>
      {/* <Row isVCentered={false}>
        <div
          className="bg-gray-600 w-1/3 text-white"
          style={{ padding: "0.2in" }}
        ></div> */}
      <div style={{ margin: "0.4in" }}>
        <RecentPublications
          publications={data.allPublications.edges[0].node.publications}
          showAbstract={false}
          showMoreButton={false}
          showCount={false}
          showIndices={true}
          start={12}
          top={12}
        />
      </div>
    </Page>

    <Page>
      {/* <Row isVCentered={false}>
        <div
          className="bg-gray-600 w-1/3 text-white"
          style={{ padding: "0.2in" }}
        ></div> */}
      <div style={{ margin: "0.4in" }}>
        <RecentPublications
          publications={data.allPublications.edges[0].node.publications}
          showAbstract={false}
          showMoreButton={false}
          showCount={false}
          showIndices={true}
          start={25}
          top={12}
        />
      </div>
    </Page>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allPublications: allPublicationsJson {
      edges {
        node {
          publications {
            pmid
            pmcid
            doi
            title
            abstract
            authorList
            authors
            peopleList
            journal
            issue
            pages
            volume
            year
            month
            day
            url
            tagList
          }
        }
      }
    }
  }
`
