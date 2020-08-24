import React  from 'react'
import {ThemeProvider,  CSSReset, ColorModeProvider} from '@chakra-ui/core'
import {customTheme} from '../gatsby-plugin-chakra-ui/theme';
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