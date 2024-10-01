import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    HStack,
    Link
} from '@chakra-ui/react'
import ContactForm from '../components/contactform'
import TransitionAnimationRight from '../components/transitionanimationright'
import { IoLogoGithub, IoLogoLinkedin, IoLogoYoutube, IoLogoInstagram } from 'react-icons/io5'
import NextLink from 'next/link'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href

    return (
        <Link
            fontSize='20px'
            href={href}
            as={NextLink}
            target={target}
            {...props}
            textDecoration={active ? 'underline' : 'none'}
        >
            {children}
        </Link>
    )
}

const Contact2 = props => {
    const { path } = props
    return (
        <Box>
            <Box>
                <Heading mb={8} display={{ base: 'none', md: 'flex' }} variant="section-title" justifyContent="center" textAlign="center" lineHeight="0.9">
                    Get in touch with the Touch
                </Heading>
                <Heading style={{ marginBottom: '-12px' }} variant="sub-title" display={{ base: 'flex', md: 'none' }} justifyContent="center" lineHeight="1.1">
                    Get in touch
                </Heading>
                <Heading mb={8} variant="sub-title" display={{ base: 'flex', md: 'none' }} justifyContent="center" lineHeight="1.1">
                    with the Touch
                </Heading>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <SimpleGrid columns={{ base: 1 }} spacing={10}>
                        <Box display={{ base: 'flex', lg: 'flex' }} alignItems="center" justifyContent="center" flexDirection="column">
                            <Box 
                                display="flex"
                                align="center"
                                alignItems="center"
                                justifyContent="center"
                            >
                                {/* &copy; {new Date().getFullYear()} Sabrina Touch. All Rights Reserved.  */}
                                <HStack>
                                    <LinkItem
                                        href="https://github.com/sabrinatouch"
                                        path={path}
                                        target="_blank"
                                    >
                                        <IoLogoGithub fontSize='24px' />
                                    </LinkItem>
                                    <LinkItem
                                        href="https://linkedin.com/in/sabrinatouch"
                                        path={path}
                                        target="_blank"
                                    >
                                        <IoLogoLinkedin fontSize='24px'/>
                                    </LinkItem>
                                    {/* <LinkItem
                                        href="https://www.instagram.com/sabrinatouch_/"
                                        path={path}
                                        target="_blank"    
                                    >
                                        <IoLogoInstagram fontSize='24px'/>
                                    </LinkItem>
                                    <LinkItem
                                        href="https://www.youtube.com/@sabrinatouch_"
                                        path={path}
                                        target="_blank"    
                                    >
                                        <IoLogoYoutube fontSize='24px'/>
                                    </LinkItem> */}
                                </HStack>
                            </Box>
                        </Box>
                        <Box w='md'>
                            {/* <TransitionAnimationRight>         */}
                                <ContactForm/>
                            {/* </TransitionAnimationRight>  */}
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact2