import React from 'react'
import {ThemeProvider, Flex, CSSReset, Box} from '@chakra-ui/core'
import {customTheme} from '../gatsby-plugin-chakra-ui/theme';
import Header from '../components/header'


export default  function Layout({children}){
    return(
        <ThemeProvider theme={customTheme}>
            <CSSReset/>
                <Header display={['none']}/>

                    <Flex flexDir={["column",'column','row']} 
                    bg='gray.50' color='gray.700'
                    >
                        {children}
                    </Flex>
         </ThemeProvider>
    )
}