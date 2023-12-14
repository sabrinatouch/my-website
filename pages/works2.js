import {
    Box,
    Container,
    Text,
    Heading
} from '@chakra-ui/react'
import Section from '../components/section'

const Works2 = () => {
    return (
      <Section delay={0.1}>
        <Box display={{ md: "flex" }} alignItems="center" justifyContent="center">
            <Box mt={{ base: 4, md: 0 }}  ml={{ md: 6 }}>
              <Heading variant="section-title">
                Works
              </Heading>
              <Text> 
                place image here
              </Text>
            </Box>
            <Box flexShrink={0}>
                caption here
            </Box>
        </Box>
      </Section>
    )
}

export default Works2