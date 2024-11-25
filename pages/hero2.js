import {
    Box,
    Heading,
    AspectRatio,
    SimpleGrid,
    Text,
    Button
} from '@chakra-ui/react'
import Section from '../components/section'
import TransitionAnimationRight from '../components/transitionanimationright'
import ModelTest from '../components/modeltest'

const Hero2 = () => {
    return (
        <SimpleGrid>
            <Box>  
                <Section delay={0.2}>
                    <TransitionAnimationRight>
                        {/* <Text style={{ fontSize: '24px', fontWeight: '400', textTransform: 'uppercase', textAlign: 'left', lineHeight: '0.9', maxWidth: 'fit-content' }}>
                            Name : Sabrina Touch <br />
                            Ability : "Magic Touch" bring together UX principles and a creative eye to make digital experiences come to life.
                        </Text> */}
                        <Heading variant="smaller-sub-title" textAlign={'center'}>
                            Creating solutions and experiences in the digital world.
                        </Heading>
                    </TransitionAnimationRight>
                </Section>
            </Box>
            {/* <Box mx={{ base: '0', md: '28' }} width={'700px'} height={'auto'} position='absolute' right='-200px' top='25px'>
                <AspectRatio ratio={1}>
                    <Box>
                        <ModelTest />
                    </Box>
                </AspectRatio>
            </Box> */}   
        </SimpleGrid>
    )
}

export default Hero2;