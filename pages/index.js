import {
    Box,
    Container,
    Text,
    Heading,
    AspectRatio,
    Image,
    SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import SpringAnimation from '../components/springanimation'
import TransitionAnimation from '../components/transitionanimation'
import ModelTest from '../components/modeltest'
import Works2 from '../pages/works2'
import Contact2 from '../pages/contact2'
import AboutMe from '../pages/aboutme'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

const Home = () => {
    useEffect(() => {
      const lenis = new Lenis()

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    })

    return (
      <Box>
        <Box height={('calc(100vh - 104px - 116px)')} justifyContent="center" alignItems="center" display="flex">
          <Section delay={0.1}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <Box>
                <TransitionAnimation>
                  <AspectRatio>
                    <Box as='threejsmodel'>
                      <ModelTest />
                    </Box>
                  </AspectRatio>
                  </TransitionAnimation>
              </Box>
              <Box display="inline-flex" flexDirection="column" justifyContent="center">
                <Heading variant="section-title">
                  Hello! I'm Sabrina Touch :)
                </Heading>
                <Text> 
                  Colorado based Cambodian-American creative~
                </Text>
                <Text> 
                  If you'd like to connect, you can contact me here.
                </Text>
              </Box>
            </SimpleGrid>
          </Section>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center">
          <SpringAnimation>
            <Box width={42} height={42} justifyContent="center" display="flex" alignItems="center">
              <Image 
                src="/down-chevron.svg"
                width={18}
                height={18}
              />
            </Box>
          </SpringAnimation>
        </Box>
        {/* <Box mt={32}>
          <AboutMe />
        </Box> */}
        <Box mt={32}>
          <Works2 />
        </Box>
        <Box mt={32}>
          <Contact2 />
        </Box>
      </Box>
    )
}

export default Home