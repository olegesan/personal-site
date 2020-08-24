import React from "react"
import {Flex} from "@chakra-ui/core"
import PersonalInfo from '../components/personal-info'
import Skills from '../components/skills'
// import Layout from "../components/layout-old"
import Experience from "../components/experience"
// import Projects from "../components/projectsBoxes"
import Projects from "../components/projectText"
import TehemeComponent from "../components/themeComponent"
import Certifications from "../components/certifications"

const Home = () => {
  return(
    <TehemeComponent >
        <PersonalInfo />
        <Flex flexDir='column'
        >
        <Skills/>
        <Projects/>
        <Certifications/>
        <Experience/>
        
        </Flex>
    </TehemeComponent>
  )
}

export default Home
