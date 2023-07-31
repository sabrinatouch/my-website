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
            <Container mb="32px" pt={4} pl={8} pr={8}>
                <AspectRatio maxW="100%">
                    <Box bg='#00cf00' display="inline-flex" justifyContent="center" alignItems="center">
                        <Text>Three.js model goes here</Text>
                    </Box>
                </AspectRatio>
                <Box mt={12}>
                    {children}
                </Box>
            </Container>
            <Footer />
        </Box>
    )
}

export default Main