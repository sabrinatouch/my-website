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

const Home = () => {
    return (
      <Box mt='auto'>
        <Section delay={0.1}>
          <VStack spacing={8}>
            <Container p={0}>
              <AspectRatio maxW="100%">
                <Box as='threejsmodel' bg='#00cf00' display="inline-flex" justifyContent="center" alignItems="center">
                    <Text>Three.js model goes here or I guess above here</Text>
                </Box>
              </AspectRatio>
            </Container>
            <Text>
              I&apos;m Sabrina, the <Text as="s">teenage witch</Text> 25 year-old UI Engineer with a magic touch.
            </Text>
            <Text> 
              Welcome to my cyber sanctuary where I showcase what I've conjured and crafted on my electronic cauldron.
            </Text>
          </VStack>
        </Section>
      </Box>
    )
}

export default Home