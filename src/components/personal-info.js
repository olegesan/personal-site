import React from 'react'
import {ImGithub, ImLinkedin,ImMail} from 'react-icons/im';
import {Box, Flex, Image, Avatar, Text, IconButton} from '@chakra-ui/core'
import Icon from './icon';
const avatarImg = require('../images/avatar.png')
export default function PersonalInfo(){
    return(
        <Flex align='center' textAlign='center' justify='center' flexDir='row' border='black 1px solid' bg='gray.50'>
            <Flex flexDir='column' color='gray.700'>
                <Avatar name="Oleg Bazylnikov" mb='0' size='2xl' src={avatarImg}></Avatar>
                <Text>Oleg Bazylnikov</Text>
                <Text>Software Engeneer</Text>
                <Flex>
                    <Icon>
                         <Box as={ImGithub} ></Box>
                    </Icon>
                    <Icon>
                        <Box as={ImLinkedin} ></Box>
                    </Icon>
                    <Icon>
                        <Box as={ImMail}></Box>
                    </Icon>
                </Flex>
            </Flex>
        </Flex>
    )
}