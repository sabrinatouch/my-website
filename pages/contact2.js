import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react'
import ContactForm from '../components/contactform'

const Contact2 = () => {
    return (
        <Box>
            <Heading variant="section-title" mb={0}>
                Get in touch...
            </Heading>
            <Heading variant="section-title" mt={0}>
                with the Touch :)
            </Heading>
            <Box display={{ md: 'flex' }}>
                <Box w={{ md: '50%', base: '100%' }}>
                    <Box h={500} bgColor={'gray.100'} borderRadius='10px'>
                        <Text>
                            Download Resume
                        </Text>
                    </Box>
                </Box>
                <Box w={{ md: '50%', base: '100%' }} mt={{ md: 0, base: 6 }} ml={{ md: 6 }}>
                    <ContactForm />
                </Box>
            </Box>
        </Box>
    )
}

export default Contact2