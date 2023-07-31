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
                maxW="5xl"
                position="relative"
                p={8}
                bg={useColorModeValue('#ffffff', '#202023')}
                {...props}
                marginInline='auto'
                zIndex={1}
            >
                <Flex>
                    <Logo />
                    <Spacer />
                    <Box align="right">
                        <Box pl={2} align="right" display={{ base: 'none', md: 'inline-block'}}>
                            <Stack
                                direction={{ base: 'none', md: 'row' }}
                                alignItems="center"
                                h='30px'
                            >
                                <LinkItem href="/works" path={path}>
                                    Works
                                </LinkItem>
                                <LinkItem href="/contact" path={path}>
                                    Contact
                                </LinkItem>
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
                            </Stack>
                        </Box>
                    </Box>
                    <Box align="right">
                        <Box align="right" display={{ base: 'inline-block', md: 'none'}}>
                            <IconButton
                                onClick={onToggle}
                                aria-label="Nav menu"
                                icon={isOpen ? <SmallCloseIcon /> : <HamburgerIcon />}
                            ></IconButton>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <SlideFade in={isOpen} unmountOnExit>
                <Container
                    zIndex={2}
                    alignItems='center'
                    justifyContent='center'
                    align='center'
                    fontSize='30'
                    position='fixed'
                    height='100vh'
                    display={{ base: 'flex', md: 'none' }}
                >
                    <VStack>
                        <Box>
                            <VStack>
                                <LinkItem onClick={onToggle} href="/" path={path}>
                                    Home
                                </LinkItem>
                                <LinkItem onClick={onToggle} href="/works" path={path}>
                                    Works
                                </LinkItem>
                                <LinkItem onClick={onToggle} href="/contact" path={path}>
                                    Contact
                                </LinkItem>
                            </VStack>
                        </Box>
                        <Box pt={36}>
                            <HStack>
                                <LinkItem
                                    href="https://github.com/sabrinatouch"
                                    path={path}
                                    target="_blank"
                                >
                                    <IoLogoGithub />
                                </LinkItem>
                                <LinkItem
                                    href="https://linkedin.com/in/sabrinatouch"
                                    path={path}
                                    target="_blank"
                                >
                                    <IoLogoLinkedin />
                                </LinkItem>
                            </HStack>
                        </Box>
                    </VStack>
                </Container>
            </SlideFade>
            <Fade in={isOpen} unmountOnExit>
                <Box
                    as='bgbox'
                    position='absolute'
                    bg={useColorModeValue('#ffffff60', '#20202360')}
                    backdropFilter='auto'
                    backdropBlur='10px'
                    w='100%'
                    zIndex={1}
                    top='72px'
                    left='0'
                    bottom='0'
                    display={{ base: 'flex', md: 'none' }}
                >
                </Box>
            </Fade>
        </Box>
    )
}

export default Navbar