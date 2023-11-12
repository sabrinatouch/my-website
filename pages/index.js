import {
    Box,
    Container,
    Text,
    VStack,
    Heading,
    Divider,
    AspectRatio
} from '@chakra-ui/react'
import Section from '../components/section'
import ModelTest from '../components/modeltest'

const Home = () => {
    return (
      <Box mt='auto'>
        <Section delay={0.1}>
          <VStack spacing={8}>
            <Container p={0}>
              <AspectRatio maxW="100%">
                <Box as='threejsmodel' display="inline-flex" justifyContent="center" alignItems="center">
                  <ModelTest />
                </Box>
              </AspectRatio>
            </Container>
            <Heading variant="section-title">Hello, my name is Sabrina!</Heading>
            <Text>
              I am a Cambodian-American UI Developer based in Colorado who enjoys being creative through design and code.
            </Text>
            <Text> 
              On the side, I am a volleyball player. I participated and helped debut the first Cambodian Women's National Beach Volleyball Team for the 2023 Southeast Asian Games (SEA Games). Learn more about my experience on the team here.
            </Text>
            <Text> 
              My other hobbies include karaoke, learning languages, and documenting my life through photos and videos. If you'd like to get to know me more, you can check out my experiences, projects, or feel free to contact me directly!
            </Text>
            <Text>
              Otherwise, thanks for stopping by~
            </Text>
          </VStack>
        </Section>
      </Box>
    )
}

export default Home