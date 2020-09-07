import React, {useEffect, useState, useRef} from 'react'
import {ImGithub, ImLinkedin,ImMail} from 'react-icons/im';
import {BsMoon, BsSun} from 'react-icons/bs'
import {Box, Flex, Image, Text, useColorMode, IconButton} from '@chakra-ui/core'
import Icon from './icon';

function ColorModeButton(){
    const { colorMode, toggleColorMode } = useColorMode();
    const bgColor = { light: "gray.50", dark: "gray.700" };
    const color = { light: "gray.700", dark: "gray.50"  };
    useEffect(()=>{
        console.log(colorMode)
    }, [colorMode])
    return(

        <IconButton
          aria-label={`Switch to ${
            colorMode === "light" ? "dark" : "light"
          } mode`}
          marginX='2'
          variant="ghost"
          color={`mode.${colorMode}.text`}
          fontSize="20px"
          size='sm'
          onClick={toggleColorMode}
          icon={colorMode === "light" ? "moon" : 'sun'}
          transition="all 0.2s"
        />

        
    )
}

export default(ColorModeButton);