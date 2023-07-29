import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Head from 'next/head'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md">
                <Box w="100%" pt={6} pb={6} align="center">
                    three.js model goes here
                </Box>
                {children}

                <Footer />
            </Container>
        </Box>
    )
}

export default Main