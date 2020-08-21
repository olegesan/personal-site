import React from 'react'
import {Flex, Box, Heading} from '@chakra-ui/core'

export default function SubSection({children, title}){
    return(
        <Flex flexDir='column' borderBottom="1px solid black" marginBottom="2">
           <Heading size='md'>{title}</Heading>
           <Box>
                {children}
           </Box>
        </Flex>
    )
}