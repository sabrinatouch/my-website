import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import Head from 'next/head'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" display="flex" flexDirection="column" minH="100vh">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar path={router.asPath} />
            <Container mb="32px" pl={8} pr={8}>
                <Box w="100%" pt={6} pb={6} align="center">
                    three.js model goes here
                </Box>
                {children}
            </Container>
            <Footer />
        </Box>
    )
}

export default Main