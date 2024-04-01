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
import TransitionAnimationRight from '../components/transitionanimationright'
import ModelTest from '../components/modeltest'
import Works2 from '../pages/works2'
import Contact2 from '../pages/contact2'
import AboutMe from '../pages/aboutme'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import Preloader from '../components/Preloader'

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
      <Box width='100%' height='100%' overflow='hidden'>
        <Preloader />
        <Box height={('calc(100vh - 200px)')}>
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
                </TransitionAnimationRight>
              </Section>
            </Box>
          </SimpleGrid>
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