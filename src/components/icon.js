import React, { Children } from 'react';
import {Box, Link} from '@chakra-ui/core'

export default function Icon({children}){
    return(
        <Link as={children.props.as} href='https://google.com' marginY='1' marginX='3' size='24px' color='gray.700'> 
        </Link>
    )
}