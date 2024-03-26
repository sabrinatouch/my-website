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
          <Box height={('calc(100vh - 220px)')} justifyContent="space-evenly" alignItems="center" display="flex" flexDirection="column">
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
              <Box style={{ width: '500px', height: 'auto', zIndex: '-1' }}>
                <Box justifyContent="center" alignItems="center">
                  <TransitionAnimation>
                    <AspectRatio ratio={1}>
                      <Box>
                        <ModelTest />
                      </Box>
                    </AspectRatio>
                  </TransitionAnimation>
                </Box>
              </Box>
              <Box display={{ base: 'flex' }} justifyContent="center" alignItems="center">
                <Section delay={0.1}>
                  <Box flexDirection="column" style={{ zIndex: '1'}} maxW={'555px'}>
                    <Heading variant="smaller-sub-title">
                      Hello! I'm...
                    </Heading>
                    <Heading variant="section-title">
                      Sabrina Touch
                    </Heading>
                    <Heading variant="smaller-sub-title">
                      UI Engineer and Graphic Designer
                    </Heading>
                  </Box>
                </Section>
              </Box>
            </SimpleGrid>
            <Box display={{ base: 'flex' }} justifyContent="center" alignItems="center">
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
        </Box>
        <Box mt={32}>
          <AboutMe />
        </Box>
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