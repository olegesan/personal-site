import React, { useEffect } from 'react'
import {ThemeProvider, Flex, CSSReset, ColorModeProvider,Box, Button, useColorMode} from '@chakra-ui/core'
import {customTheme} from '../gatsby-plugin-chakra-ui/theme';
import Seo from './seo'
import Header from '../components/header'


export default  function Layout({children}){
    const {colorMode} = useColorMode()
    const bgColor = { light: "gray.50", dark: "gray.700" };
    const color = { light: "gray.700", dark: "gray.50"  };
    return(
       <Box>
                <Seo/>
                        <Flex flexDir={["column",'column','row']} 
                        bg={bgColor[colorMode]}color='gray.700'
                        >
                            {children}
                        </Flex>
       </Box>

    )
}