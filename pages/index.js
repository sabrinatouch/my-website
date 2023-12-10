import {
    Box,
    Container,
    Text,
    VStack,
    Heading,
    Divider,
    AspectRatio,
    UnorderedList,
    ListItem,
    HStack,
    Stack,
    SimpleGrid,
    Grid,
    GridItem,
    Link,
    Image
} from '@chakra-ui/react'
import Section from '../components/section'
import ModelTest from '../components/modeltest'

const Home = () => {
    return (
      <Section delay={0.1}>
        <Box p={4} display={{ md: "flex" }} alignItems="center" justifyContent="center">
            <Box flexShrink={0} width={{ md: '50%' }}>
              <Container>
                <AspectRatio maxW="100%">
                  <Box as='threejsmodel'>
                    <ModelTest />
                  </Box>
                </AspectRatio>
              </Container>
            </Box>
            <Box mt={{ base: 4, md: 0 }}  ml={{ md: 6 }}>
              <Heading variant="section-title">
                Hello! I'm Sabrina Touch :)
              </Heading>
              <Text> 
                What do I do? I translate imagination into design, sculpting captivating visuals as a UI Developer and Graphic Designer, all the while pursuing personal milestones as an athlete.
              </Text>
              <Text pt={8}> 
                If you'd like to connect, you can contact me here.
              </Text>
            </Box>
        </Box>
      </Section>
    )
}

export default Home