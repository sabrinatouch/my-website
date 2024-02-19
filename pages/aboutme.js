import {
    Box,
    Text,
    Heading,
    VStack
} from "@chakra-ui/react"

const AboutMe = () => {
    return (
        <Box>
            <Heading variant="section-title" display={{ base: 'none', lg: 'flex' }}>
                About Me
            </Heading>
            <Heading variant="sub-title" display={{ base: 'flex', lg: 'none' }}>
                About Me
            </Heading>
            <Box mt={4} bgColor={'gray.100'}>
                <Box h={500} w={2}></Box>
            </Box>
        </Box>
    )
}

export default AboutMe