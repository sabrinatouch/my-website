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
        <Box height={('calc(100vh - 220px)')}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '2', md: '14' }} height='100%'>
            <AspectRatio ratio={1}>
              <Box>
                <ModelTest />
              </Box>
            </AspectRatio>
            <Box display="flex" alignItems="center" justifyContent="center" width="100%">  
              <Section delay={0.1}>
                <Heading variant="smaller-sub-title" textAlign="center">
                  Hello, I'm
                </Heading>
                <Heading variant="section-title" style={{ lineHeight: '0.9' }} textAlign="center">
                  Sabrina Touch
                </Heading>
                <Box display="flex" alignItems="center" justifyContent="center" mt={6}>
                  <Heading style={{ fontSize: '14px', fontWeight: '400', textTransform: 'uppercase', borderWidth: '2px', borderRadius: '25px', padding: '6px 10px', textAlign: 'center', lineHeight: '0.9', maxWidth: 'fit-content' }}>
                    UI Engineer and Graphic Designer
                  </Heading>
                </Box>
              </Section>
            </Box>
          </SimpleGrid>

          {/* <Box display={{ base: 'flex' }} justifyContent="center" alignItems="center">
            <SpringAnimation>
              <Box width={42} height={42} justifyContent="center" display="flex" alignItems="center">
                <Image 
                  src="/down-chevron.svg"
                  width={18}
                  height={18}
                />
              </Box>
            </SpringAnimation>
          </Box> */}
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