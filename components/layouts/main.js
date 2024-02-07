
import { Box, Container, Text, AspectRatio } from '@chakra-ui/react'
import Navbar from '../navbar'
import Head from 'next/head'
import Footer from '../footer'
import Header from '../Header'

const Main = ({ children, router }) => {
    return (
        <Box as="main" display="flex" flexDirection="column" minH="100vh">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />
            {/* <Navbar path={router.asPath} /> */}
            <Container maxW='6xl' pl={8} pr={8} mt={32}>
                {children}
            </Container>
            <Footer />
        </Box>
    )
}

export default Main
