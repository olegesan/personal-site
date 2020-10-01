import React  from 'react'
import { Flex,Box, useColorMode} from '@chakra-ui/core'
import {css} from '@emotion/core'

import Seo from './seo'



export default  function Layout({children}){
    const {colorMode} = useColorMode()
    const bgColor = { light: "gray.50", dark: "gray.700" };
    const color = { light: "gray.700", dark: "gray.50"  };

    const styled = css`
    html:{
        background-color:${colorMode=='light'?  "#F7FAFC" : '#2D3748'}
    }
    `

    return(
       <Box>
                <Seo/>
                        <Flex flexDir={["column",'column','row']} 
                        bg={bgColor[colorMode]}color={color[colorMode]}
                        >
                            {children}
                        </Flex>
       </Box>

    )
}