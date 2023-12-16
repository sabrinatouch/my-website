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
          Works
        </Heading>
        <WorkItem2 />
        <WorkItem2 />
      </Section>
    )
}

export default Works2