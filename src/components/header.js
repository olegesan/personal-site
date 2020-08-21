import React from 'react';
import { render } from 'react-dom';
import {Flex, IconButton, Box} from '@chakra-ui/core';


export default function Header(props){
    return(
        <Flex position='sticky' zIndex='2' top='0' display={props.display || ['block', 'none']} bg='gray.50'> 
            <Box >
                <IconButton  icon='arrow-up' bg='none' size='sm'/>
            </Box>
        </Flex>
    )
}