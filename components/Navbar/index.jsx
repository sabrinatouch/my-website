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
    const resumeURL = 'https://drive.google.com/file/d/1VueHQHO0XUqU6HjwF-ipMZiLb5s-4Moc/view?usp=drive_link'

    const [text, setText] = useState('Email');
    const [bgColor, setBgColor] = useState('whiteAlpha.900')
    const [hasCopied, setHasCopied] = useState(false);

    async function CopyToClipboard() {
        try {
            await navigator.clipboard.writeText("sabrinajindatouch@gmail.com");
            setHasCopied(true);
        } catch (error) {
            console.error(error.message);
        }
    }

    const handleClick = () => {
        CopyToClipboard();
        setText('Copied');
        setBgColor('blackAlpha.300');
    }

    return (
        <Box display="flex">
            <Box
                as="nav"
                w="100%"
                p={8}
            >
                <Flex alignItems={'center'} flexWrap='wrap' gap={4}>
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
                    <Box align="right">
                        <Box align="right" display={{ base: 'inline-block' }}>
                            <Stack direction={'row'}>
                                <Button onClick={handleClick} variant='solid' backgroundColor={bgColor} style={{ cursor: 'pointer' }}>
                                    {text}
                                    {hasCopied ? <span style={{ marginLeft: '2px' }}><IoCheckmarkCircleOutline /></span> : null}
                                </Button>
                                <a href={resumeURL} target={'_blank'}>
                                    <Button backgroundColor={'whiteAlpha.900'}>
                                        Resume
                                    </Button>
                                </a>
                            </Stack>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Navbar