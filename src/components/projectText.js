import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/core'
import Section from './section'
import SubSection from './subSection'
import Description from './description'
import ProjectBox from './projectBox'
import Stack from './stack'
import ProjectInfo from './projectInfo'

const projects = [{
    image:'christmas_list',
title:"Christmas List",
github: 'https://github.com/olegesan/christmas_list_webapp',
stack:'Python, Django, Bootstrap, JQuery',
date:'Dec, 2019',
stack:"Python, Django, JQuery, Bootstrap",
description:"Blahblah Pieds des ou la j'ai  vu de ou flache.."},
{
    image:'bible_scraper',
    github:'https://github.com/olegesan/bible_scapper',
    title:'Bible Scraper',
    stack:'Python, Requests, BeautifulSoup, JSON',
    date:'Jan, 2020',
    stack: "Python, BeautifulSoup, Requests",
    description:"Nonumy erat diam voluptua sanctus ipsum ipsum. Diam diam justo labore tempor kasd at eirmod dolore. Amet ipsum vero sit."
},
{
    image:'bible_react',
    github:'https://github.com/olegesan/bible_react',
    title:'Bible React',
    stack:'React.JS, Flask',
    date:'Feb, 2020',
    stack: "Python, BeautifulSoup, Requests",
    description:"Nonumy erat diam voluptua sanctus ipsum ipsum. Diam diam justo labore tempor kasd at eirmod dolore. Amet ipsum vero sit."
},
{
    image:'wedding_react',
    github:'https://github.com/olegesan/wedding-website',
    title:'Wedding React',
    stack:'React.js, MongoDB, Node.js, Twillo SendGrid',
    date:'Mar, 2020',
    stack: "React.JS, MongoDB, SendGrid by Twillo, ",
    description:"Nonumy erat diam voluptua sanctus ipsum ipsum. Diam diam justo labore tempor kasd at eirmod dolore. Amet ipsum vero sit."
}]
export default function Projects({children}){

    return(
        <Section title='Projects'>
            {projects.reverse().map(project=>{
                return(
                    <SubSection title={project.title}
                     github={project.github}
                    >
                        <Description>
                            <ProjectInfo date={project.date}
                            stack={project.stack}/>
                            {project.description}
                            </Description>
                    </SubSection>
                )
            })}
        </Section>
    )
}