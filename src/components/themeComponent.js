import React, { useEffect } from 'react'
import {ThemeProvider, Flex, CSSReset, ColorModeProvider,Box, Button, useColorMode} from '@chakra-ui/core'
import {customTheme} from '../gatsby-plugin-chakra-ui/theme';
import Seo from './seo'
import Header from '../components/header'
import Layout from './layout'


export default  function TehemeComponent({children}){
  
    return(
        <>
        <ThemeProvider theme={customTheme}>
            <CSSReset/>
            <ColorModeProvider>
               <Layout>
                   {children}
               </Layout>
            </ColorModeProvider>
         </ThemeProvider>
         </>
    )
}