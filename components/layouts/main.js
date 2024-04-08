
import { Box, Container, Text, AspectRatio } from '@chakra-ui/react'
import Navbar from '../navbar'
import Head from 'next/head'
import Footer from '../footer'
import Header from '../Header'
import TransitionAnimationTop from '../transitionanimationtop'

const Main = ({ children, router }) => {
    return (
        <Box as="main" display="flex" flexDirection="column" minH="100vh">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <TransitionAnimationTop>
                <Header />
            </TransitionAnimationTop>
            <Container maxW='8xl' pl={14} pr={14} mt={24}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
