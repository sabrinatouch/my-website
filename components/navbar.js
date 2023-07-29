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
import { HamburgerIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
    return (
        <Link
            href={href}
            as={NextLink}
            target={target}
            {...props}
            pl={2}
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
                bg={useColorModeValue('#ffffff40', '#20202380')}
                {...props}
                marginInline='auto'
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
                                    <IoLogoGithub />
                                </LinkItem>
                            </Stack>
                        </Box>
                    </Box>
                    <Box align="right">
                        <Box align="right" display={{ base: 'inline-block', md: 'none'}}>
                            <IconButton
                                onClick={onToggle}
                                aria-label="Nav menu"
                                icon={<HamburgerIcon />}
                            ></IconButton>
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <Fade in={isOpen} unmountOnExit>
                <Box
                    position='absolute'
                    w='100%'
                    bg='#ffffff40'
                    css={{ backdropFilter: 'blur(10px)' }}
                    top='72px'
                    zIndex={1}
                    left='0'
                    bottom='0'
                    display={{ base: 'flex', md: 'none' }}
                >
                </Box>
            </Fade>
            <SlideFade in={isOpen} unmountOnExit>
                <Container
                    zIndex={2}
                    alignItems='center'
                    justifyContent='center'
                    align='center'
                    color='darkGrey'
                    fontSize='24'
                    position='fixed'
                    height='100vh'
                    display={{ base: 'flex', md: 'none' }}
                >
                    <VStack>
                        <Box>
                            <VStack>
                                <Text>
                                    Works
                                </Text>
                                <Text>
                                    Contact
                                </Text>
                            </VStack>
                        </Box>
                        <Box pt={36}>
                            <HStack>
                                <Text>
                                    LinkedIn
                                </Text>
                                <Text>
                                    GitHub
                                </Text>
                            </HStack>
                        </Box>
                    </VStack>
                </Container>
            </SlideFade>
        </Box>
    )
}

export default Navbar