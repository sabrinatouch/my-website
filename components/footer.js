import { 
    Box, 
    Link, 
    Text, 
    HStack,
    SimpleGrid,
    Heading
} from '@chakra-ui/react'
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

const Footer = props => {
    const { path } = props
    return (
        <Box           
            bgColor={'gray.800'}     
            color={'#c9fd74'} 
            height='fit-content'
            borderRadius={'18px 18px 0px 0px'}
            p={8}
            mt={32}
        >
            <Box 
                display="flex"
                align="center"
                alignItems="center"
                justifyContent="space-between"
            >
                <Text variant="sub-title" color={'#c9fd74'}>&copy; {new Date().getFullYear()} Sabrina Touch</Text>
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
    )
}

export default Footer