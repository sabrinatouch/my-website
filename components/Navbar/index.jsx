// Navbar
'use client'

import { useState } from 'react'
import { 
    Box, 
    Flex,
    Stack,
    Text,
    useDisclosure,
    useColorModeValue,
    Spacer
 } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { Link } from 'react-scroll'
import styles from './style.module.scss'

const LinkItem = ({href, children}) => {
    return (
        <Link
            className={styles.navbar}
            activeClass="active"
            to={href} 
            smooth={true}
            spy={true}
            offset={-50}
        >
            {children}
        </Link>
    )
}

const Navbar = props => {
    return (
        <Box>
            <Box
                as="nav"
                w="100%"
                h="104px"
                maxW="10xl"
                position="relative"
                p={8}
                // bg={useColorModeValue('#ffffff', '#202023')}
                color={'blackAlpha.600'}
                {...props}
                marginInline='auto'
            >
                <Flex>
                    <Text>
                        <span style={{ fontSize: '24px'}}>sabrina touch</span> . com
                    </Text>
                    <Spacer />
                    <Box align="right">
                        <Box pl={2} align="right" display={{ base:  'inline-block'}}>
                            <Stack
                                direction={{ base: 'column', md: 'row' }}
                                alignItems={{ base: 'flex-end', md: 'center' }} 
                                h='40px'
                                gap={{ base: '0', md: '2' }}
                            >
                                <LinkItem href="works">
                                    Works,
                                </LinkItem>
                                <LinkItem href="aboutme">
                                    About,
                                </LinkItem>
                                <LinkItem href="contact">
                                    Contact
                                </LinkItem>
                            </Stack>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Navbar