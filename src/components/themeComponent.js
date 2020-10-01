import React  from 'react'
import {ThemeProvider,  CSSReset, ColorModeProvider, useColorMode} from '@chakra-ui/core'
import {customTheme} from '../gatsby-plugin-chakra-ui/theme';
import Layout from './layout'
import {Global, css } from '@emotion/core'

const GlobalStyle = ({ children }) => {

    const { colorMode } = useColorMode();
    return (
      <>
        <CSSReset />
        <Global
          styles={css`
            html {
                background: ${colorMode === 'light' ? "#F7FAFC" : '#2D3748'};
            }
            body, html{
                scroll-behavior: smooth;
            }
          `}
        />
        {children}
      </>
    );
  };
export default  function TehemeComponent({children}){
  
    return(
        <ThemeProvider theme={customTheme}>
            <GlobalStyle>
                <ColorModeProvider value="light">
                    <Layout>
                        {children}
                    </Layout>
                </ColorModeProvider>
            </GlobalStyle>
         </ThemeProvider>
    )
}