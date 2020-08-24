import React from 'react';
import Section from '../components/section'
import SubSection from '../components/subSection'
import Description from '../components/description'

export default function Skills({children}){
    return(
        <Section title="Skills">
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