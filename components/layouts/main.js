
import { Box, Container, Text, AspectRatio } from '@chakra-ui/react'
import Navbar from '../Navbar'
import Head from 'next/head'
import Footer from '../footer'
import Header from '../Header'
import TransitionAnimationTop from '../transitionanimationtop'
import Image from 'next/image'

const Main = ({ children, router }) => {
    return (
        // <Box as="main" display="flex" flexDirection="column" minW='100%' minH={'full'}>
        <Box as="main" minW='100%' minH={'full'}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Box display='flex' position='fixed' zIndex={-1} minH='full' backgroundColor={'whiteAlpha.900'}>
                <Image
                    src="/grainybg.jpg"
                    width={1920}
                    height={1080}
                    alt="grainy bg"
                    style={{ opacity: '0.125', objectFit: 'fill'}}
                />
            </Box>
            <Box zIndex={2}>
                <Navbar />
                {/* <TransitionAnimationTop>
                    <Header />
                </TransitionAnimationTop> */}
                <Box>
                    {children}
                </Box>
                <Footer />
            </Box>
        </Box>
    )
}

export default Main
