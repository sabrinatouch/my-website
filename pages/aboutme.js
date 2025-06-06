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
import TransitionAnimation from "../components/transitionanimation"

const AboutMe = () => {
    return (
        <Box>
            <Box mt={4}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={14}>
                    <Box display={{ base: 'relative', md: 'flex' }} alignItems="flex-start" justifyContent="center" flexDirection="column">
                        <Heading variant="section-title" display={{ base: 'none', md: 'flex' }} lineHeight="0.9">
                            About
                        </Heading>
                        <Heading variant="sub-title" display={{ base: 'flex', md: 'none' }}>
                            About
                        </Heading>
                        <TransitionAnimation>
                            <Text mt={8} variant="sub-title">
                                I&apos;m a Cambodian-American creative technologist based in Denver, Colorado. My expertise lies in engineering user interfaces, graphic design, and UX design, bringing together technical elements while maintaining the visual appeal.
                            </Text>
                            <Text mt={4} variant="sub-title">
                                I enjoy playing volleyball, karaoke, trying new matcha powders, and playing PC games. 
                            </Text>
                        </TransitionAnimation>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <TransitionAnimationRight>
                            <Image src={'./selfie.png'} borderRadius='15px' alt="selfie" />
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