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
        <Heading variant="section-title">
          Works & Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <WorkItem2 id="bobatouch" thumbnail="/tb-bobatouch.png" title="Boba Touch" description="Website / JavaScript / Figma " />
          <WorkItem2 id="khmerconference" thumbnail="/tb-khmerconference.png" title="Cambodian Networking Conference" description="Adobe Illustrator / Graphic Design / Logo" />
          <WorkItem2 id="temp" thumbnail="/tb-bobatouch.png" title="Temp" description="testtest" />
          <WorkItem2 id="temp" thumbnail="/thumbnail_placeholder.png" title="Temp" description="testtest" />
        </SimpleGrid>
      </Section>
    )
}

export default Works2