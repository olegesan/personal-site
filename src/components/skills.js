import React from 'react';
import Section from '../components/section'
import SubSection from '../components/subSection'
import Description from '../components/description'

export default function Skills({children}){
    return(
        <Section title="Skills">
          <SubSection title='Frontend'>
            <Description>
            React.JS · Gatsby · Chakra-UI · HTML5 · CSS · JQuery · Bootstrap
            </Description>
          </SubSection>

          <SubSection title='Backend'>
            <Description>
              NodeJS · Django · Express.js · Flask · GraphQL · REST API · Laravel
            </Description>
          </SubSection>
          <SubSection title='Programming'>
              <Description>
                JavaScript · Java · Python · PHP
              </Description>
            </SubSection>
        </Section>
    )
}