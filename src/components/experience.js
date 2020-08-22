import React from 'react';
import {Box, Flex, Text} from '@chakra-ui/core'
import Section from '../components/section'
import SubSection from '../components/subSection'
import Description from '../components/description'


export default function Experience({children}){
    return(
        <Section title="Experience">
            {/* <Description>
            Life is useless without experiences
            </Description> */}
          <SubSection title='MSIT Peer Tutor' 
          date='Oct, 2019 - Present'
          location='Academic Enhancement Center, GGC'>
              <Description>
              Help multiple students with undestanding 
              of fundamental CS concepts. Reviewed their 
              code to debug it and make more efficient, 
              when necessary.
              </Description>
          </SubSection>
          <SubSection title='Foreign Language Teacher' 
          date='Aug, 2018 - Aug, 2019'
          location='ABIE, China'>
              <Description>
              I was a part of intenational team of teachers
               at a private laguage school for children. We 
               developed various tracks for students to enhance 
               their learning experience through highly 
               interactive lessons. It laso helped me to 
               develop digital media skills, while making 
               unique educational materials for studnets.
              </Description>
          </SubSection>
        </Section>
    )
}