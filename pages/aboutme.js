import {
    Box,
    Text,
    Heading,
    VStack,
    SimpleGrid,
    Image,
    AspectRatio
} from "@chakra-ui/react"
import TransitionAnimationRight from "../components/transitionanimationright"

const AboutMe = () => {
    return (
        <Box>
            <Box mt={4}>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
                    <Box display={{ base: 'relative', lg: 'flex' }} alignItems="flex-start" justifyContent="center" flexDirection="column">
                        <Heading variant="section-title" display={{ base: 'none', lg: 'flex' }}>
                            About Me
                        </Heading>
                        <Heading variant="sub-title" display={{ base: 'flex', lg: 'none' }}>
                            About Me
                        </Heading>
                        <Text mt={4} variant="sub-title">
                            I'm a Cambodian-American creative technologist based in Denver, Colorado with a passion for crafting engaging user visuals and experiences. My expertise lies in engineering user interfaces, graphic design, and UX design, where I blend technical skills with my keen eye for aesthetics. I'm driven by the desire to create meaningful interactions that delight users and enhance digital products. 
                        </Text>
                        <Text mt={4} variant="sub-title">
                            In my free time, I enjoy playing volleyball, karaoke, trying new matcha powders, and playing PC games. 
                        </Text>
                    </Box>
                    <Box>
                        <TransitionAnimationRight>
                            <Image src={'./selfie.png'} borderRadius='15px' />
                            <Text mt={4}>
                                📍 Kyoto, Japan
                            </Text>
                        </TransitionAnimationRight> 
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default AboutMe