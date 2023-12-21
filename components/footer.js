import { 
    Box, 
    Link, 
    Text, 
    HStack 
} from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
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
            align="center"
            fontSize={14}
            mt={32}
            mb={16}
        >
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
                        <IoLogoGithub font-size='20px' />
                    </LinkItem>
                    <LinkItem
                        href="https://linkedin.com/in/sabrinatouch"
                        path={path}
                        target="_blank"
                    >
                        <IoLogoLinkedin font-size='20px'/>
                    </LinkItem>
                    <LinkItem
                        href=""
                        path={path}
                        target="_blank"    
                    >
                        instagram
                    </LinkItem>
                    <LinkItem
                        href=""
                        path={path}
                        target="_blank"    
                    >
                        youtube
                    </LinkItem>
                </HStack>
            </Box>
            <Box mt={4}>
                <Text>Thanks for stopping by!</Text>
            </Box>
        </Box>
    )
}

export default Footer