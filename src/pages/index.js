import React from "react"
import { Link } from "gatsby"
import {Flex, Box} from "@chakra-ui/core"
import Layout from '../components/layout'
import PersonalInfo from '../components/personal-info'
import Section from '../components/section'
import SubSection from '../components/subSection'
import Description from '../components/description'
// import Layout from "../components/layout-old"
import SEO from "../components/seo"

const Home = () => {

  return(
    <Layout>
        <PersonalInfo/>
        <Section title="Skills">
          <Description>
          It is always fun to build new 
          things that come in handy and 
          help to learn more about new 
          technology. Plus it can help 
          later on with all experiences 
          you've had.
          </Description>
          <SubSection title='Frontend Development'>
            <Description>
            React.JS, HTML, CSS, Javascript, SCSS, JQuery, Bootstrap
            </Description>
          </SubSection>

          <SubSection title='Backend Development'>
            <Description>
              Python, Django, Express, Flask, Node, MongoDB, SQLite
            </Description>
          </SubSection>
          <SubSection title='Python Libraries'>
              <Description>
                Nampy, Pandas, Matplotlib, BeautifulSoup, Requests, Folium
              </Description>
            </SubSection>
        </Section>
        <Section title="Experience">
          <SubSection/>
        </Section>
        <Section title="Projects">
          <SubSection/>
        </Section>
        <Section title="Skills">
          <SubSection/>
        </Section>
        <Section title="Experience">
          <SubSection/>
        </Section>
        <Section title="Projects">
          <SubSection/>
        </Section>
    </Layout>
  )
}

export default Home
