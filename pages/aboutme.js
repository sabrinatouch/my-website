import {
    Box,
    Text,
    Heading,
    VStack,
    SimpleGrid,
    Image
} from "@chakra-ui/react"
import TransitionAnimationRight from "../components/transitionanimationright"

const AboutMe = () => {
    return (
        <Box>
            <Heading variant="section-title" display={{ base: 'none', lg: 'flex' }}>
                About Me
            </Heading>
            <Heading variant="sub-title" display={{ base: 'flex', lg: 'none' }}>
                About Me
            </Heading>
            <Box mt={4}>
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
                    <Text variant="sub-title">
                        From custom websites to crafting your ideal logo, I translate imagination into beautiful digital visuals.

                        As a Cambodian-American creative, I especially love combining culture and heritage into my work.
                    </Text>
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