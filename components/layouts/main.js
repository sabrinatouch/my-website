
import { Box, Container, Text, AspectRatio } from '@chakra-ui/react'
import Navbar from '../Navbar'
import Head from 'next/head'
import Footer from '../footer'
import Header from '../Header'
import TransitionAnimationTop from '../transitionanimationtop'
import Image from 'next/image'

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
            </Box>
        </Box>
    )
}

export default Main
