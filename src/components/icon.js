import React, { Children } from 'react';
import {Box, Link} from '@chakra-ui/core'

export default function Icon({children,as, href}){
    return(
        <Link  href={href} > 
            <Box as={as} marginY='1' marginX='3' size='24px' color='gray.700'/>
        </Link>
    )
}