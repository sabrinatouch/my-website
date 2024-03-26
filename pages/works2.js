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
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={14}>
          <WorkItem2 id="bobatouch" href="https://bobatouch.com/" thumbnail="/tb-bobatouch.png" title="Boba Touch" description="Website / JavaScript / Figma " />
          <WorkItem2 id="khmerconference" href="/" thumbnail="/tb-khmerconference.png" title="Cambodian Networking Conference" description="Adobe Illustrator / Graphic Design / Logo" />
        </SimpleGrid>
      </Section>
    )
}

export default Works2