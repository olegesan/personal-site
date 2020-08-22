import React from 'react'
import {Text, Heading, Flex, Box} from '@chakra-ui/core'

export default function Section({children, title}){
    return(
        <Flex flexDir={['column']}  margin={['8','16']}>
            <Heading textAlign='center'marginBottom={['2']}>{title}</Heading>
            <Box >
                {children}
                
            </Box>
        </Flex>
    )
}
