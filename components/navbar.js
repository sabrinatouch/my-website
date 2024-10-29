import Logo from './logo'
import { 
    Box, 
    Container,
    IconButton,
    Flex,
    Stack,
    Text,
    VStack,
    HStack,
    SlideFade,
    Fade,
    useDisclosure,
    useColorModeValue,
    Spacer
 } from '@chakra-ui/react'
import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { Link } from 'react-scroll'

// const LinkItem = ({ href, path, target, children, ...props }) => {
//     const active = path === href

//     return (
//         <Link
//             fontSize='21px'
//             href={href}
//             as={NextLink}
//             target={target}
//             {...props}
//             textDecoration={active ? 'underline' : 'none'}
//         >
//             {children}
//         </Link>
//     )
// }

const LinkItem = ({href, children}) => {
    return (
        <Link 
            activeClass="active"
            to={href} 
            smooth={true}
            spy={true}
            offset={-50}
            style={{ cursor: 'pointer' }}
        >
            {children}
        </Link>
    )
}

const Navbar = props => {
    const { isOpen, onToggle } = useDisclosure()

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
                    {/* <Logo /> */}
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