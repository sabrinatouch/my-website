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
import SpringAnimation from '../components/springanimation'
import ModelTest from '../components/modeltest'
import Works2 from '../pages/works2'

const Home = () => {
    return (
      <Box>
        <Section delay={0.1}>
          <Box display={{ md: "flex" }} alignItems="center" justifyContent="center">
            <Box flexShrink={0} width={{ md: '50%', base: '100%' }}>
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

        <Box display="flex" justifyContent="center">
          <SpringAnimation>
            <Box width={42} height={42} justifyContent="center" display="inline-flex" alignItems="center">
              <Image 
                src="/down-chevron.svg"
                width={30}
                height={30}
              />
            </Box>
          </SpringAnimation>
        </Box>
      </Box>
    )
}

export default Home