import {
    Box,
    Container,
    Text,
    Heading
} from '@chakra-ui/react'
import Section from '../components/section'
import WorkItem2 from '../components/work-item2'

const Works2 = () => {
    return (
      <Section delay={0.2}>
        <Heading variant="section-title">
          Works & Projects
        </Heading>
        <WorkItem2 id="bobatouch" thumbnail="/thumbnail_bobatouch.png" title="Boba Touch" description="test description" />
        <WorkItem2 id="temp" thumbnail="/thumbnail_placeholder.png" title="Temp" description="testtest" />
        <WorkItem2 id="temp" thumbnail="/thumbnail_placeholder.png" title="Temp" description="testtest" />
      </Section>
    )
}

export default Works2