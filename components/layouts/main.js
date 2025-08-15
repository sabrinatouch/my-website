
import { Box, Container, Text, AspectRatio } from '@chakra-ui/react'
import Navbar from '../Navbar'
import Head from 'next/head'
import Footer from '../footer'
import Header from '../Header'
import TransitionAnimationTop from '../transitionanimationtop'
import Image from 'next/image.js'
import Noise from '../Noise'

const Main = ({ children, router }) => {
    return (
        <Box as="main" minH={'full'} backgroundColor={'blackAlpha.100'}>
            <Box zIndex={1}>
                <Navbar />
                {/* <TransitionAnimationTop>
                    <Header />
                </TransitionAnimationTop> */}
                <Box>
                    {children}
                </Box>
                <Footer />
                {/* <Noise /> */}
            </Box>
        </Box>
    )
}

export default Main
