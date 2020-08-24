import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/core'
import Section from '../components/section'
import SubSection from '../components/subSection'
import Description from '../components/description'

export default function Skills({children}){
    return(
        <Section title="Skills">
          {/* <Description>
          It is always fun to build new 
          things that come in handy and 
          help to learn more about new 
          technology. Plus it can help 
          later on with all experiences 
          you've had.
          </Description> */}
          <SubSection title='Frontend Development'>
            <Description>
            React.JS, Gatsby, Chakra-UI, HTML, CSS, Javascript, SCSS, JQuery, Bootstrap
            </Description>
          </SubSection>

          <SubSection title='Backend Development'>
            <Description>
              Python, Django, Express, Flask, Node, MongoDB, SQLite, GraphQL, MySQL
            </Description>
          </SubSection>
          <SubSection title='Python Libraries'>
              <Description>
                Nampy, BeautifulSoup, Requests, Folium
              </Description>
            </SubSection>
        </Section>
    )
}