import React from 'react'
import {ImGithub, ImLinkedin,ImMail} from 'react-icons/im';
import {Box, Flex, Image, Avatar, Text, IconButton} from '@chakra-ui/core'
import Icon from './icon';
const avatarImg = require('../images/avatar.png')
export default function PersonalInfo(){
    return(
        <Flex align='center' textAlign='center' justify='center' flexDir='row'  bg='gray.50' 
        h={['','','100vh']} w={['','','4xl','5xl','6xl']} marginTop={['2','2','0']} >
            <Flex flexDir='column' color='gray.700' align='center'>
                <Box  marginBottom='0'  ><Image size={['150px', '200px', '250px','' ,'300px']} borderRadius='9999px' src={avatarImg}/></Box>
                <Text fontSize={['md', 'md', 'xl']} >Oleg Bazylnikov</Text>
                <Text fontSize={['md', 'md', 'xl']} >Software Engeneer</Text>
                <Flex flexDir='row' justify='space-around'>
                        <Icon as={ImGithub} href='https://github.com/olegesan'/>
                        <Icon as={ImLinkedin} href='https://www.linkedin.com/in/oleg-bazylnikov/'/>
                        <Icon as={ImMail} href="mailto:oleg.bazylnikov@gmail.com"/>
                </Flex>
            </Flex>
        </Flex>
    )
}