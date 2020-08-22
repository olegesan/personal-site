import React from 'react'
import {Text, Flex, theme} from '@chakra-ui/core'

console.log(theme)
export default function Description({children}){
    return(
        <Text >
            {children}
        </Text>
    )
}