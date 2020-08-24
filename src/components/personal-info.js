import React, {useEffect, useState, useRef} from 'react'
import {ImGithub, ImLinkedin,ImMail} from 'react-icons/im';
import {Box, Flex, Image, Avatar, Text, IconButton} from '@chakra-ui/core'
import Icon from './icon';
const avatarImg = require('../images/avatar.png')
export default function PersonalInfo(){
    const[isSticky, setSticky] = useState(false);
    const trigger = useRef(null)
    const handleScroll=()=>{

        if(trigger.current.getBoundingClientRect().top <= 0 && !isSticky) {
            setSticky(true)
        }else if(trigger.current.getBoundingClientRect().top > 0 && isSticky){
            setSticky(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
    })
    return(
        <Flex float='left' align='center' textAlign='center' justify='center' flexDir='row'  bg='gray.50' 
        h={['','','100vh']} w={['','','4xl','5xl','6xl']} marginTop={['2','2','0']} position={['','','sticky']} top='0px'>
            <Flex flexDir='column' color='gray.700' align='center' >
                <Box  marginBottom='0'  ><Image size={['150px', '200px', '200px','' ,'300px']} borderRadius='9999px' src={avatarImg}/></Box>
                <Text fontSize={['md', 'md', 'xl']} >Oleg Bazylnikov</Text>
                <Text fontSize={['md', 'md', 'xl']}  >Software Engeneer</Text>
                <Flex flexDir='row' justify='space-around' ref={trigger} >
                        <Icon as={ImGithub} href='https://github.com/olegesan'/>
                        <Icon as={ImLinkedin} href='https://www.linkedin.com/in/oleg-bazylnikov/'/>
                        <Icon as={ImMail} href="mailto:oleg.bazylnikov@gmail.com"/>
                </Flex>
                {
                    isSticky?
                    <Flex flexDir='row' justify='space-around' position="fixed" top='0' zIndex='2' bg='gray.50' w='100vw' padding='2' >
                        <Icon as={ImGithub} href='https://github.com/olegesan'/>
                        <Icon as={ImLinkedin} href='https://www.linkedin.com/in/oleg-bazylnikov/'/>
                        <Icon as={ImMail} href="mailto:oleg.bazylnikov@gmail.com"/>
                </Flex>
                : null
                }
            </Flex>
        </Flex>
    )
}