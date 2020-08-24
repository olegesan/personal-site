import React from "react"
import { Link } from "gatsby"
import {Flex, Box} from "@chakra-ui/core"
import Layout from '../components/layout'
import PersonalInfo from '../components/personal-info'
import Section from '../components/section'
import SubSection from '../components/subSection'
import Skills from '../components/skills'
// import Layout from "../components/layout-old"
import SEO from "../components/seo"
import Experience from "../components/experience"
// import Projects from "../components/projectsBoxes"
import Projects from "../components/projectText"

const Home = () => {
  return(
    <Layout >
        <PersonalInfo />
        <Flex flexDir='column'
        >
        <Skills/>
        <Experience/>
        <Projects/>
        
        </Flex>
    </Layout>
  )
}

export default Home
