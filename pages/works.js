import {
    Container,
    Text,
    Box,
    Heading
} from '@chakra-ui/react'
import Section from '../components/section'
import WorksContent from '../components/works-content'

const Works = () => {
    return (
        <Box>
            <Section delay={0.1}>
                <Heading variant='section-title' letterSpacing={'tighter'}>
                    Works
                </Heading>
                <WorksContent />
            </Section>
        </Box>
    )
}

export default Works