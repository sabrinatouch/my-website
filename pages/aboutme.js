import {
    Box,
    Text,
    Heading,
    VStack
} from "@chakra-ui/react"

const AboutMe = () => {
    return (
        <Box>
            <Heading variant="section-title">
                About Me
            </Heading>
            <Box bgColor={'gray.100'}>
                <Box w={{ md: '50%', base: '100%' }} display="flex">
                    <VStack spacing={4} align="left">
                        <Text>
                            [1998] I am a Cambodian-American born on May 4 in Colorado. (Yes, may the "fourth" be with you)
                        </Text>
                        <Text>
                            [1998-2016] My childhood consisted of... taking piano lessons for 5 years, learned the guitar, played soccer, self-taught how to play the guzheng, and annual camping trips to Nebraska's Lake McConaughy.
                        </Text>
                        <Text>
                            [2016] Graduated from Legacy High School. Attended the University of Colorado at Boulder.
                        </Text>
                        <Text>
                            [2018] For a four-year period, I was heavily dedicated to learning Korean, which led me to study abroad at Yonsei University in South Korea. Currently, I'm enjoying actively learning Khmer and Japanese.
                        </Text>
                        <Text>
                            [2020] I completed my Bachelor of Science in Computer Science at the University of Colorado at Boulder.
                        </Text>
                        <Text>
                            [2022] Worked as a UI Engineer at Xactly Corporation
                        </Text>
                        <Text>
                            [2023] SEA Games. Cambodian Beach National Volleyball Team.
                        </Text>
                        <Text>
                            [THESE DAYS...] When I'm relaxing, I indulge in PC gaming, with Lost Ark being my current favorite, and also enjoy having solo karaoke jams in my home.
                        </Text>
                    </VStack>
                    <Box h={500} w={2} bgColor={'blue.200'} borderRadius='10px' ml={6} mr={6} mt={2} mb={2}></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default AboutMe