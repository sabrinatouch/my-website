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
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                    <Box display={{ base: 'relative', lg: 'flex' }} alignItems="flex-start" justifyContent="center" flexDirection="column">
                        <Heading variant="section-title" display={{ base: 'none', lg: 'flex' }}>
                            About Me
                        </Heading>
                        <Heading variant="sub-title" display={{ base: 'flex', lg: 'none' }}>
                            About Me
                        </Heading>
                        <Text mt={4} variant="sub-title"> 
                            From custom websites to crafting your ideal logo, I translate imagination into beautiful digital visuals.

                            As a Cambodian-American creative, I especially love combining culture and heritage into my work.
                        </Text>
                    </Box>
                    <Box>
                        <TransitionAnimationRight>
                        
                                <Image src={'./selfie.png'} borderRadius='15px' />
                     
                        </TransitionAnimationRight> 
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default AboutMe