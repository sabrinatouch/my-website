import { Box, Container, Text, AspectRatio } from '@chakra-ui/react'
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
            <Container mt='auto' mb="32px" pl={8} pr={8}>
                {children}
            </Container>
            <Footer />
        </Box>
    )
}

export default Main