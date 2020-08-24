import React, {useEffect, useState, useRef} from 'react'
import {ImGithub, ImLinkedin,ImMail} from 'react-icons/im';
import {BsMoon, BsSun} from 'react-icons/bs'
import {Box, Flex, Image, Text, useColorMode} from '@chakra-ui/core'
import Icon from './icon';
const avatarImg = require('../images/avatar.png')
export default function PersonalInfo(){
    const[isSticky, setSticky] = useState(false);
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = { light: "gray.50", dark: "gray.700" };
    const color = { light: "gray.700", dark: "gray.50"  };
    useEffect(()=>{
        console.log(colorMode)
    }, [colorMode])
    const trigger = useRef(null)
    const handleScroll=()=>{
        if(trigger.current!=null){
            
            if(trigger.current.getBoundingClientRect().top <= 0 && !isSticky) {
                setSticky(true)
            }else if(trigger.current.getBoundingClientRect().top > 0 && isSticky){
                setSticky(false)
            }
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScroll)
    })
    return(
        <Flex float='left' align='center' textAlign='center' justify='center' flexDir='row'  bg={bgColor[colorMode]} color={color[colorMode]}
        h={['','','100vh']} w={['','','4xl','5xl','6xl']} marginTop={['2','2','0']} position={['','','sticky']} top='0px'>
            <Flex flexDir='column'  align='center' >
                <Box  marginBottom='0' paddingTop='2'  ><Image size={['150px', '200px', '200px','' ,'300px']} borderRadius='9999px' src={avatarImg}/></Box>
                <Text fontSize={['md', 'md', 'xl']} >Oleg Bazylnikov</Text>
                <Text fontSize={['md', 'md', 'xl']}  >Software Engeneer</Text>
                <Flex flexDir='row' justify='space-around' ref={trigger} >
                        <Icon as={ImGithub} href='https://github.com/olegesan'/>
                        <Icon as={ImLinkedin} href='https://www.linkedin.com/in/oleg-bazylnikov/'/>
                        <Icon as={ImMail} href="mailto:oleg.bazylnikov@gmail.com"/>
                        <Icon as={colorMode==='dark'?BsSun:BsMoon} onClick={toggleColorMode}/>
                </Flex>
                {
                    isSticky?
                    <Flex flexDir='row' justify='space-around' position="fixed" top='0' zIndex='2' bg={bgColor[colorMode]} w='100vw' padding='2' >
                        <Icon as={ImGithub} href='https://github.com/olegesan'/>
                        <Icon as={ImLinkedin} href='https://www.linkedin.com/in/oleg-bazylnikov/'/>
                        <Icon as={ImMail} href="mailto:oleg.bazylnikov@gmail.com"/>
                        <Icon as={colorMode==='dark'?BsSun:BsMoon} onClick={toggleColorMode}/>
                </Flex>
                : null
                }
            </Flex>
        </Flex>
    )
}