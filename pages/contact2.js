import {
    Box,
    Heading,
    Text,
    SimpleGrid,
    HStack,
    Link
} from '@chakra-ui/react'
import ContactForm from '../components/contactform'
import TransitionAnimationRight from '../components/transitionanimationright'

const Contact2 = props => {
    return (
        <Box>
            <Box>
                <Heading mb={8} display={{ base: 'none', md: 'flex' }} variant="section-title" justifyContent="center" textAlign="center" lineHeight="0.9">
                    Get in touch with the Touch
                </Heading>
                <Heading style={{ marginBottom: '-12px' }} variant="sub-title" display={{ base: 'flex', md: 'none' }} justifyContent="center" lineHeight="1.1">
                    Get in touch
                </Heading>
                <Heading mb={8} variant="sub-title" display={{ base: 'flex', md: 'none' }} justifyContent="center" lineHeight="1.1">
                    with the Touch
                </Heading>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <SimpleGrid columns={{ base: 1 }} spacing={10}>
                        <Box w='sm'>
                            {/* <TransitionAnimationRight>         */}
                                <ContactForm/>
                            {/* </TransitionAnimationRight>  */}
                        </Box>
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact2