import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react'
import ContactForm from '../components/contactform'

const Contact2 = () => {
    return (
        <Box>
            <Heading variant="section-title">
                Contact
            </Heading>
            <Box display={{ md: 'flex' }}>
                <Box w={{ md: '50%', base: '100%' }}>
                    <ContactForm />
                </Box>
                <Box w={{ md: '50%', base: '100%' }}>
                    <Text>
                        Other social medias
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact2