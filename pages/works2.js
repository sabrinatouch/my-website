import {
    Box,
    Container,
    Text,
    Heading,
    SimpleGrid,
    useToast,
    Button
} from '@chakra-ui/react'
import Section from '../components/section'
import WorkItem2 from '../components/work-item2'

const Works2 = () => {
  const toast = useToast()

    return (
      <Section delay={0.2}>
        <Heading variant="sub-title" display={{ base: 'flex' }} mb={12}>
          Works
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <WorkItem2 id="bobatouch" href="https://bobatouch.com/" thumbnail="/tb-bobatouch.png" title="Boba Touch" description="Website" target="_blank" />
          <WorkItem2 id="personalwebsite" href="https://sabrinatouch.com" thumbnail="/tb-personalwebsite.png" title="Personal Website" description="Website" />
          <WorkItem2 id="3dmodel" href="/underconstruction" thumbnail="/tb-3dmodel.png" title="3D Desk Model" description="3D Modeling" />
          <WorkItem2 id="khmerconference" href="/works/cambodianlogo" thumbnail="/tb-cambodianlogo.png" title="Cambodian Inspired Logo" description="Graphic Design" />
        </SimpleGrid>
      </Section>
    )
}

export default Works2