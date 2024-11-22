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
          <WorkItem2 id="bobatouch" href="https://bobatouch.com/" thumbnail="/tb-bobatouch.png" title="Boba Touch" subtitle="Drink Cafe" description={"Website"} year="2022" target="_blank" />
          <WorkItem2 id="colfaxandsaintpaul" href="https://www.colfaxandsaintpaul.com/" thumbnail="/tb-colfaxandsaintpaul.jpg" title="Colfax & Saint Paul" subtitle="Commercial Real Estate" description="Website" year="2024" target="_blank" />
          <WorkItem2 id="3dmodel" href="/underconstruction" thumbnail="/tb-3dmodel.png" title="3D Desk Model" subtitle="Blender" description="3D Modeling" year="2024" />
          <WorkItem2 id="khmerconference" href="/works/cambodianlogo" thumbnail="/tb-cambodianlogo.png" title="Cambodian Inspired Logo" subtitle="Networking Conference" description="Graphic Design" year="2024" />
        </SimpleGrid>
      </Section>
    )
}

export default Works2