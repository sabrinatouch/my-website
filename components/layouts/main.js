
import { Box, Container, Text, AspectRatio } from '@chakra-ui/react'
import Navbar from '../Navbar'
import Head from 'next/head'
import Footer from '../footer'
import Header from '../Header'
import TransitionAnimationTop from '../transitionanimationtop'
import Image from 'next/image'

const Main = ({ children, router }) => {
    return (
        <Box as="main" display="flex" flexDirection="column" minH="100vh">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Box display={'flex'} position={'fixed'} zIndex={1} minH={'100vh'} backgroundColor={'beige.100'} opacity={1}>
                <Image
                    src="/grainybg.jpg"
                    width={1920}
                    height={1080}
                    alt="grainy bg"
                    style={{ opacity: '0.1', objectFit: 'fill'}}
                />
            </Box>
            <Box zIndex={2}>
                <Navbar/>
                {/* <TransitionAnimationTop>
                    <Header />
                </TransitionAnimationTop> */}
                <Container maxW='6xl'>
                    {children}
                </Container>
                <Footer />
            </Box>
        </Box>
    )
}

export default Main
