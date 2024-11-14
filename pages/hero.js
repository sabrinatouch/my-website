import {
    Box,
    Heading,
    AspectRatio,
    SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import TransitionAnimationRight from '../components/transitionanimationright'
import ModelTest from '../components/modeltest'

const Hero = () => {
    return (
        <Box>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '2', md: '14' }} height='100%'>
            <AspectRatio ratio={1}>
                <Box>
                <ModelTest />
                </Box>
            </AspectRatio>
            <Box display="flex" alignItems="center" justifyContent="center" width="100%">  
                <Section delay={0.2}>
                <TransitionAnimationRight>
                    <Heading variant="smaller-sub-title" textAlign="center">
                    Hello, I&apos;m
                    </Heading>
                    <Heading variant="section-title" style={{ lineHeight: '0.9' }} fontSize={{ base: '52px', md: '86px'}} textAlign="center">
                    Sabrina Touch
                    </Heading>
                    <Box display="flex" alignItems="center" justifyContent="center" mt={6}>
                    <Heading style={{ fontSize: '14px', fontWeight: '400', textTransform: 'uppercase', borderWidth: '2px', borderRadius: '25px', padding: '6px 10px', textAlign: 'center', lineHeight: '0.9', maxWidth: 'fit-content' }}>
                        UI Engineer and Graphic Designer
                    </Heading>
                    </Box>
                </TransitionAnimationRight>
                </Section>
            </Box>
            </SimpleGrid>
        </Box>
    )
}

export default Hero;