import React from 'react'
import {ThemeProvider} from '@chakra-ui/core'
import customTheme from '../gatsby-plugin-chakra-ui/theme';
import Header from '../components/header'
// import Layout from './layout-old'

export default  function Layout({children}){
    return(
        <ThemeProvider theme={customTheme}>
            <Header display='none'/>
            {children}
         </ThemeProvider>
    )
}