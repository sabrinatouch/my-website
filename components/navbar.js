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
    Link,
    Spacer
 } from '@chakra-ui/react'
import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href

    return (
        <Link
            fontSize='21px'
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

const Navbar = props => {
    const { path } = props
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
                    <Logo />
                    <Spacer />
                    <Box align="right">
                        <Box pl={2} align="right" display={{ base:  'inline-block'}}>
                            <Stack
                                direction={{ base: 'none', md: 'row' }}
                                alignItems='center'
                                h='40px'
                            >
                                <LinkItem href="/works" path={path}>
                                    Works
                                </LinkItem>
                                <LinkItem href="/about" path={path}>
                                    About
                                </LinkItem>
                                <LinkItem href="/contact" path={path}>
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