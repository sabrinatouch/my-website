import {
    Box,
    Container,
    Text,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import WorkItem2 from '../components/work-item2'

const Works2 = () => {
    return (
      <Section delay={0.2}>
        <Heading variant="section-title" display={{ base: 'none', lg: 'flex' }}>
          Works
        </Heading>
        <Heading variant="sub-title" display={{ base: 'flex', lg: 'none' }}>
          Works
        </Heading>
        <SimpleGrid mt={4} columns={{ base: 1, md: 2 }} spacing={8}>
          <WorkItem2 id="bobatouch" thumbnail="/tb-bobatouch.png" title="Boba Touch" description="Website / JavaScript / Figma " />
          <WorkItem2 id="khmerconference" thumbnail="/tb-khmerconference.png" title="Cambodian Networking Conference" description="Adobe Illustrator / Graphic Design / Logo" />
          <WorkItem2 id="temp" thumbnail="/tb-khmerconference.png" title="3D Desk Model" description="Blender / Graphic Design " />
          <WorkItem2 id="temp" thumbnail="/tb-bobatouch.png" title="Personal Website" description="Website / NextJS / ChakraUI / Framer" />
        </SimpleGrid>
      </Section>
    )
}

export default Works2