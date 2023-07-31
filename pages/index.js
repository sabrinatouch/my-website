import {
    Box,
    Container,
    Text,
    VStack,
    Heading,
    Divider
} from '@chakra-ui/react'
import Section from '../components/section'

const Home = () => {
    return (
      <Box>
        <Section delay={0.1}>
          <VStack spacing={8}>
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