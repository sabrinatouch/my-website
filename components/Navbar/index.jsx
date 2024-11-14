// Navbar

import { 
    Box, 
    Flex,
    Stack,
    Text,
    useDisclosure,
    useColorModeValue,
    Spacer,
    Button,
    Heading
 } from '@chakra-ui/react'
import { useState } from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoClipboard, IoCheckmarkCircleOutline } from 'react-icons/io5'
import { Link } from 'react-scroll'
import styles from './style.module.scss'
import Logo from '../logo'

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
    const [text, setText] = useState('Email');
    const [bgColor, setBgColor] = useState('whiteAlpha.900')
    const [hasCopied, setHasCopied] = useState(false);

    async function CopyToClipboard() {
        try {
            await navigator.clipboard.writeText("sabrinajindatouch@gmail.com");
            setText('Copied');
            setBgColor('blackAlpha.300');
            setHasCopied(true);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Box>
            <Box
                as="nav"
                w="100%"
                maxW="10xl"
                position="relative"
                p={8}
                // bg={useColorModeValue('#ffffff', '#202023')}
                {...props}
                marginInline='auto'
            >
                <Flex alignItems={'center'}>
                    <Box display='flex'>
                        <Logo />
                        <Stack direction={{ base: 'column' }} gap={{ base: '0' }} pl={4}>
                            <Heading variant='smallest-sub-title'>
                                Sabrina Touch
                            </Heading>
                            <Text fontSize='16px'>
                                UI Developer
                            </Text>
                        </Stack>
                    </Box>
                    <Spacer />
                    {/* <Box align="right">
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
                    </Box> */}
                    <Box align="right" zIndex={2}>
                        <Box pl={2} align="right" display={{ base: 'inline-block' }}>
                            <Stack direction={'row'}>
                                <Button onClick={() => CopyToClipboard()} variant='solid' backgroundColor={bgColor}>
                                    {text}
                                    {hasCopied ? <span style={{ marginLeft: '2px' }}><IoCheckmarkCircleOutline /></span> : null}
                                </Button>
                                <Button backgroundColor={'whiteAlpha.900'}>
                                    Resume
                                </Button>
                            </Stack>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Navbar