import React from 'react'
import {Text} from '@chakra-ui/core'
export default function Date({children, date, marginBottom}){
    return(
        <Text fontWeight={['500']}
         fontSize={['sm', 'md', 'md']} 
         marginBottom={marginBottom}>
            {date}
        </Text>
    )
}