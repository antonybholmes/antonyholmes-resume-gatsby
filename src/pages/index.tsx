import React from "react"
import { graphql, Link } from "gatsby"
import RecentPublications from "../components/publication/recentpublications"
import Layout from "../components/layout"
import Page from "../components/page"
import Row from "../components/row"
import BlueLink from "../components/bluelink"
import WhiteLink from "../components/whitelink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ColorLink from "../components/colorlink"
import Job from "../components/job"
import Bold from "../components/bold"
import TwoCol from "../components/twocol"
import Title from "../components/title"

type IndexProps = {
  data: any
}

const IndexPage: React.FC<IndexProps> = ({ data }) => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <Page>
      {/* <div className="bg-gray-400 text-white" style={{padding: "0.4in"}}>
      <Row isCentered={true}>
        <h2 className="uppercase font-semibold" style={{ letterSpacing: "1rem", fontFamily: "Poppins"}}>
          Antony Holmes
        </h2>
      </Row>

      <Row isCentered={true} className="mt-2">
       <div className="tracking-wide uppercase">
          347 688 5690
        </div>
      </Row> */}

      {/* <Row isCentered={true} className="m-6 justify-between text-xs">
        <div>
          <BlueLink to="mailto:antony@antonyholmes.com">
            antony@antonyholmes.com
          </BlueLink>
        </div>
        <div>
          <BlueLink to="https://www.linkedin.com/in/antonybholmes">
            linkedin.com/in/antonybholmes
          </BlueLink>
        </div>
        <div>
          <BlueLink to="https://github.com/antonybholmes">
            github.com/antonybholmes
          </BlueLink>
        </div>
      </Row> */}

      {/* <Row isCentered={true} className="mt-4">
      

        <div className="w-3/4 text-justify">
          Data scientist and full stack software developer with 8 years
          experience developing open source software and applications for cancer
          genetics research. Experienced in the full software development
          life-cycle from requirement definition, prototyping, design, interface
          implementation, and maintenance. Excellent written and oral
          communication skills demonstrated by more than 24 publications and
          teaching courses on Unix/Linux and bioinformatics to graduate
          students.
        </div>
      </Row> */}

      <TwoCol>
        <>
          <h2
            className="uppercase text-center mt-8"
            style={{ letterSpacing: "0.3rem" }}
          >
            Antony Holmes
          </h2>

          <div className="text-justify" style={{ padding: "0.25in" }}>
            <ul>
              <li>
                Data scientist and full stack software developer with 8 years
                experience developing open source software and applications for
                cancer genetics research.
              </li>
              <li>
                Experienced in the full software development life-cycle from
                requirement definition, prototyping, design, interface
                implementation, and maintenance.
              </li>
              <li>
                Excellent written and oral communication skills demonstrated by
                more than 25 publications.
              </li>
            </ul>
          </div>

          <h5
            className="uppercase font-normal bg-black-30 my-4 py-2"
            style={{
              paddingLeft: "0.25in",
              paddingRight: "0.25in",
            }}
          >
            Contact
          </h5>

          <div
            className="mt-4"
            style={{ paddingLeft: "0.25in", paddingRight: "0.25in" }}
          >
            <Row>
              <div className="w-8">
                <FontAwesomeIcon icon={["far", "envelope"]} size="lg" />
              </div>
              <div>
                <ColorLink color="white" to="mailto:antony@antonyholmes.com">
                  antony@antonyholmes.com
                </ColorLink>
              </div>
            </Row>

            <Row className="mt-3">
              <div className="w-8">
                <FontAwesomeIcon icon="phone" size="lg" />
              </div>
              <div>
                <ColorLink color="white" to="tel:3476885690">
                  (347) 688-5690
                </ColorLink>
              </div>
            </Row>

            <Row className="mt-3">
              <div className="w-8">
                <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
              </div>
              <div>
                <ColorLink color="white" to="https://github.com/antonybholmes">
                  github.com/antonybholmes
                </ColorLink>
              </div>
            </Row>

            <Row className="mt-3">
              <div className="w-8">
                <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
              </div>
              <div>
                <ColorLink
                  color="white"
                  to="https://www.linkedin.com/in/antonybholmes"
                >
                  linkedin.com/in/antonybholmes
                </ColorLink>
              </div>
            </Row>
          </div>

          {/* <h6
            className="uppercase font-normal bg-black-30 mb-4 py-2"
            style={{
              marginTop: "0.4in",
              paddingLeft: "0.25in",
              paddingRight: "0.25in",
            }}
          >
            Education
          </h6>
          <div
            className="mt-4"
            style={{ paddingLeft: "0.25in", paddingRight: "0.25in" }}
          >
            <p style={{ marginTop: "0.1in" }}></p>

            <Row isVCentered={false}>
              <div>
                <div className="uppercase font-semibold tracking-wide">
                  Ph.D Mathematical Biology
                </div>
                <p>2009, University of Warwick UK</p>
                <p>SIWN Best Paper Award</p>
              </div>
            </Row>

            <Row className="mt-2">
              <div>
                <div className="uppercase font-semibold tracking-wide">
                  M.Sc Computer Science
                </div>
                <p>2004, University of Warwick UK</p>
              </div>
            </Row>

            <Row className="mt-2">
              <div>
                <div className="uppercase font-semibold tracking-wide">
                  B.Sc Computer Science
                </div>
                <p>2003, University of Warwick UK</p>
                <p>First-class honours</p>
              </div>
            </Row>
          </div> */}
        </>
        <>
          <Title>Experience</Title>

          <Job
            date="2015-present"
            title="Senior Bioinformatics Developer"
            place="Columbia University"
          >
            <ul>
              <li>
                Full stack systems engineer with expertize developing web based
                genomics tools and databases using Java, Python, and Javascript.
              </li>
              <li>
                Migrated lab data and core applications onto AWS cloud
                infrastructure using a mixture EC2, S3, and RDS services
                reducing costs by 90%.
              </li>
              <li>
                Created a new Institute for Cancer Genetics department{" "}
                <BlueLink to="https://wwww.columbiaicg.org">web site</BlueLink>{" "}
                within a budgeted 6 month timeframe using a static site single
                page application written in <Bold>React</Bold>+<Bold>JSX</Bold>{" "}
                to implement modern web standards, ease deployment and updates,
                and reduce costs by 80%.
              </li>
              {/* <li>
                Data scientist designing pipelines for analyzing single cell,
                ChIP-seq, and RNA-seq data.
              </li> */}

              <li>
                Developed multi-user database genomic web applications running
                on AWS using Django, API Gateway, and Postgresql to allow users
                remote access to core lab data and analysis to improve
                productivity.
              </li>
              {/* <li>
                Ported applications into Node + Electron + React JS framework
                for improved UI and integration with web services.
              </li> */}
            </ul>
          </Job>

          <Job
            date="2012-2015"
            title="Associate Research Scientist"
            place="Columbia University"
          >
            <ul>
              <li>
                Developed expertise in analyzing microarray, SNP 6.0, RNA-seq,
                Chip-seq, and single cell genomic data using next generation
                sequencing tools.
              </li>
              <li>
                Developed cluster based data pipelines using <Bold>Python</Bold>
                , <Bold>R</Bold>, and <Bold>BASH</Bold> to run next generation
                sequencing and big data analysis that reduced analysis time from
                days to hours.
              </li>
              <li>
                Core <Bold>Java</Bold> developer creating desktop applications
                empower scientists to analyse data on their own. The
                applications are available as an open source suite of
                specialized genomics tools on{" "}
                <BlueLink to="https://github.com/antonybholmes/matcalc">
                  GitHub
                </BlueLink>
                .
              </li>
              <li>
                Published over <Bold>25</Bold> articles on B-cell development
                and genetic lesions associated with development in high impact
                journals, including Nature, Cell, Blood, and the New England
                Journal of Medicine.
              </li>
            </ul>
          </Job>

          <Job
            date="2009-2012"
            title="Post Doctoral Research Scientist"
            place="Columbia University"
          >
            <ul>
              <li>
                Data mining electronic health records (EHR) at New York
                Presbyterian Hospital.
              </li>
              <li>
                Onboarded as database administrator to create a research version
                of the hospital EHR system for multi-user access to researchers.
              </li>
              <li>
                Studied patterns of influenza to look for predictive power in
                hospital records for New York public health.
              </li>
              <li>
                Discovered novel relationships between rare diseases and
                co-morbidities which were developed into <Bold>MATLAB</Bold> and{" "}
                <Bold>Java</Bold> applications to offer potential avenues for
                new therapeutics. This work resulted in three publications.
              </li>
            </ul>
          </Job>
        </>
      </TwoCol>
    </Page>

    <Page>
      <TwoCol>
        <div>
          <h5
            className="uppercase font-normal bg-black-30 mb-4 py-2"
            style={{
              paddingLeft: "0.25in",
              paddingRight: "0.25in",
            }}
          >
            Education
          </h5>
          <div
            className="mt-4"
            style={{ paddingLeft: "0.25in", paddingRight: "0.25in" }}
          >
            <p style={{ marginTop: "0.1in" }}></p>

            <Row isVCentered={false}>
              <div>
                <div className="uppercase font-semibold tracking-wide">
                  Ph.D Mathematical Biology
                </div>
                <p>2009, University of Warwick UK</p>
                {/* <p className="italic">
                  Understanding morphogenesis in myxobacteria from a theoretical
                  and experimental perspective
                </p> */}
                <p>SIWN Best Paper Award</p>
              </div>
            </Row>

            <Row className="mt-2">
              <div>
                <div className="uppercase font-semibold tracking-wide">
                  M.Sc Computer Science
                </div>
                <p>2004, University of Warwick UK</p>
              </div>
            </Row>

            <Row className="mt-2">
              <div>
                <div className="uppercase font-semibold tracking-wide">
                  B.Sc Computer Science
                </div>
                <p>2003, University of Warwick UK</p>
                <p>First-class honours</p>
              </div>
            </Row>
          </div>
        </div>
        <>
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

          <Title className="mt-8">Skills</Title>

          <Row
            isVCentered={false}
            className="mt-2"
            style={{ paddingLeft: "0.25in", paddingRight: "0.25in" }}
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
            style={{ paddingLeft: "0.25in", paddingRight: "0.25in" }}
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
            style={{ paddingLeft: "0.25in", paddingRight: "0.25in" }}
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
              paddingLeft: "0.25in",
              paddingRight: "0.25in",
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

          <Title className="mt-8">References</Title>

          <Row
            wrap={true}
            className="mt-2"
            style={{ paddingLeft: "0.25in", paddingRight: "0.25in" }}
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
        </>
      </TwoCol>
    </Page>

    <Page>
      {/* <Row isVCentered={false}>
        <div
          className="bg-gray-600 w-1/3 text-white"
          style={{ padding: "0.25in" }}
        ></div> */}

      <Title>Publications</Title>
      <div style={{ padding: "0.25in" }}>
        <RecentPublications
          publications={data.allPublications.edges[0].node.publications}
          showAbstract={false}
          showMoreButton={false}
          showCount={false}
          showIndices={true}
          top={12}
        />
      </div>
    </Page>

    <Page>
      {/* <Row isVCentered={false}>
        <div
          className="bg-gray-600 w-1/3 text-white"
          style={{ padding: "0.25in" }}
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
          style={{ padding: "0.25in" }}
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
