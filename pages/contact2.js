import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react'
import ContactForm from '../components/contactform'

const Contact2 = () => {
    return (
        <Box>
            <Heading display={{ base: 'none', lg: 'flex' }} variant="section-title" mb={0} justifyContent="center">
                Get in touch with the Touch
            </Heading>
            <Heading variant="sub-title" display={{ base: 'flex', lg: 'none' }} justifyContent="center">
                Get in touch with the Touch
            </Heading>
            <Box mt={4} display={{ md: 'flex' }}>
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