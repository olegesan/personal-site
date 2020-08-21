import React from 'react'
import {Text, Heading, Flex} from '@chakra-ui/core'

export default function Section({children, title}){
    return(
        <Flex flexDir={['column']} border='1px solid black' margin='2'>
            <Heading>{title}</Heading>
            {children}
        </Flex>
    )
}
