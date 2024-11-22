import {
    Box,
    Heading,
    AspectRatio,
    SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import TransitionAnimationRight from '../components/transitionanimationright'
import ModelTest from '../components/modeltest'
import Works2 from '../pages/works2'
import Contact2 from '../pages/contact2'
import AboutMe from '../pages/aboutme'
import Hero from '../pages/hero'
import Hero2 from '../pages/hero2'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import { Element } from 'react-scroll'
import MainLayout from '../components/layouts/main'

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
      <MainLayout>
        <Box width='100%' height='100%' overflow='hidden'>
          <Box mt={18} display='flex' justifyContent={'center'}>
            <Box px={8} maxW='6xl'>
              <Element name="home">
                {/* <Hero /> */}
                <Hero2 />
              </Element>
            </Box>
          </Box>
          <Box display={{ base: 'block', md: 'flex' }} justifyContent={{ base: 'none', md: 'center' }}>
            <Box width={'700px'} position={{ base: 'relative', md: 'none'}} top={{ base: '-100px', md: '0px'}}>
                <AspectRatio ratio={1}>
                    <Box>
                        <ModelTest />
                    </Box>
                </AspectRatio>
            </Box>
          </Box>
          <Box display='flex' justifyContent={'center'}>
            <Box backgroundColor={'whiteAlpha.900'} borderRadius={'40px'} py={20} px={8} maxW='6xl'>
              <Element name="works">
                <Works2 />
              </Element>
            </Box>
          </Box>
          {/* <Box mt={32}>
            <Element name="aboutme">
              <AboutMe />
            </Element>
          </Box> */}
          {/* <Box mt={32}>
            <Element name="contact">
              <Contact2 />
            </Element>
          </Box> */}
        </Box>
      </MainLayout>
    )
}

export default Home