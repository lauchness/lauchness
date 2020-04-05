import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/seo"
import { StyledHeading, PageHeading } from "../components/Typography"
import Card from "../components/Card"
import Banner from "../components/Banner"
import Content from "../components/Content"

const AboutPage = () => {
  const { lauchieFace } = useStaticQuery(graphql`
    query {
      lauchieFace: file(relativePath: { eq: "lauchie.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About Lauchlan Chisholm" />
      <Banner>
        <PageHeading>About Lauchlan Chisholm</PageHeading>
        <Image
          childImageSharp={lauchieFace.childImageSharp}
          round={true}
          maxWidth={300}
        />
      </Banner>
      <Content>
        <br />
        <StyledHeading>About Me</StyledHeading>
        <p>
          I'm a musician, and programmer who strives to enjoy his life, and
          spread that joy to others.
        </p>
        <p>I live with my wife, three sons, and dog in Nova Scotia, Canada.</p>
        <br />
        <StyledHeading>Career Overview</StyledHeading>
        <Card title="Software Developer @ REDspace | Jan 2019 - Present">
          <div>
            <a href="https://redspace.com">REDspace - Bedford, NS</a>
          </div>
          <p>
            Working with world-class brands, I have been using modern
            web-frameworks, Amazon Web Services, and dev-ops tools to deliver
            quality digital experiences.
          </p>
          <h3>Skills Developed</h3>
          <ul>
            <li>
              Building and maintaining client trust through communication and
              delivery.
            </li>
            <li>
              Development of ReactJS, Serverless Lambda, Node.js, and WordPress
              applications.
            </li>
            <li>
              Education and public speaking. I've presented at many internal
              knowledge sharing events, as well as meetups and conferences!
            </li>
          </ul>
          <h3>Results</h3>
          <p>
            Working with the creative director at REDspace, we received 5 awards
            for our work with USA Network on the Jessica Pearson Style
            Powerhouse site, including an honorable mention from the{" "}
            <a href="https://www.awwwards.com/sites/pearson-style-powerhouse">
              Awwwards Website Awards.
            </a>
          </p>
        </Card>
        <Card title="Software Developer @ IBM | Jun 2018 – Jan 2019">
          <div>IBM - Bedford, NS</div>
          <p>
            Working in an enterprise setting, I was placed on a project to
            create a Robotics Process Automation solution for RBC.
          </p>
          <h3>Skills Developed</h3>
          <ul>
            <li>
              Opportunity to deliver many product demonstrations to high ranking
              employees and representatives of RBC.
            </li>
            <li>
              Learned the business value and advanced application of Robotics
              Process Automation.
            </li>
          </ul>
          <h3>Results</h3>
          <p>
            By using my communication skills to understand current business
            process, I was able to work with my team to develop an automation
            process to help improve operations within the organization.
          </p>
        </Card>
        <Card title="Software Developer @ Freewheeling Adventures | April 2017 – Jun 2018">
          <div>
            <a href="https://freewheeling.ca">
              Freewheeling Adventures - The Lodge, NS
            </a>
          </div>
          <p>
            Working in an office setting, I was tasked with improving and
            upgrading the Microsoft Access Database used to track client and
            business information.
          </p>
          <h3>Skills Developed</h3>
          <ul>
            <li>Translating client requirements to computer solutions</li>
            <li>Advanced SQL for both data definition and data manipulation</li>
            <li>
              Advanced application of VBA to build complex custom Database
              Management System
            </li>
          </ul>
          <h3>Results</h3>
          <p>
            Using my understanding of business needs in tandem with my
            programming skills I was able to design, develop and deliver two
            major projects, increasing in-office productivity, in 2 months.
          </p>
        </Card>
        <StyledHeading>Education</StyledHeading>
        <Card title="Information Technology Diploma (May 2018)">
          <div>
            <a href="https://www.nscc.ca/learning_programs/programs/PlanDescr.aspx?prg=ITPR&pln=ITPROGRAM">
              NSCC - Halifax, NS
            </a>
          </div>
          <p>
            Gained a hands-on education in a wide variety of programming
            languages and IT skills.
          </p>
          <h3>Results</h3>
          <p>
            Received the highest academic acheivement for my program, and was
            hired as a Software Developer.
          </p>
        </Card>
        <Card title="Bachelor of Music (May 2014)">
          <div>
            <a href="https://www.dal.ca/faculty/arts/school-of-performing-arts/programs/music-programs/undergraduate/bmus.html">
              Dalhousie University - Halifax, NS
            </a>
          </div>
          <p>
            Studied music performance, composition, and improvisation in a
            classical setting.
          </p>
          <p>
            During this period of my life I was exposed to some of the most
            incredible music and musicians I've known. My musical education
            happened outside of University as much as within.
          </p>
          <h3>Outcome</h3>
          <p>
            Music has been, and will continue to be, one of the most important
            aspects of my life.
          </p>
          <p>
            During my time in a University music program I learned what it means
            to feel failure, and pick yourself back up again. I also learned the
            value of working hard, and earning your success.
          </p>
          <p>
            I credit this period of my life for teaching me that the most
            important thing any musician can be, is a listener. And the most
            critical thing we can do as musicians, is serve the music itself.
          </p>
        </Card>
        <Card title="Bachelor of Science, Major in Applied Mathematics  (May 2010)">
          <em>*Unfinished - Completed 3 years*</em>
          <div>
            <a href="https://www.dal.ca/faculty/science/math-stats/programs.html">
              Dalhousie University - Halifax, NS
            </a>
          </div>
          <p>
            Studied Applied Mathematics with the intention of recieving a Major
            in Applied Mathematics
          </p>
          <h3>Results</h3>
          <p>
            I achieved a 4.0 GPA during my studies in Mathematics and gained a
            solid grounding in advanced mathematical concepts.
          </p>
        </Card>
      </Content>
    </Layout>
  )
}

export default AboutPage
