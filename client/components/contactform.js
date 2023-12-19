import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    VStack,
    Heading
} from '@chakra-ui/react'
import { Formik, Form, Field } from "formik";

const ContactForm = () => {
    return (
        <Flex bg="gray.100">
            <Box bg="white" rounded="md" w={64}>
                <Formik
                    initialValues={{
                        firstname: "",
                        email: "",
                        message: ""
                    }}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                {({ handleSubmit, errors, touched }) => (
                    <Form onSubmit={handleSubmit}>
                        <VStack spacing={4} align="flex-start">
                            <FormControl>
                                <FormLabel htmlFor="name">Name</FormLabel>
                                <Field
                                    as={Input}
                                    id="name"
                                    name="name"
                                    type="name"
                                    variant="filled"
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Field
                                    as={Input}
                                    id="email"
                                    name="email"
                                    type="email"
                                    variant="filled"
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="message">Message</FormLabel>
                                <Field
                                    as={Input}
                                    id="message"
                                    name="message"
                                    type="message"
                                    variant="filled"
                                />
                            </FormControl>
                            <Button type="submit" colorScheme="purple" width="full">
                                Send
                            </Button>
                        </VStack>
                    </Form>
                )}
                </Formik>
            </Box>
        </Flex>
    )
}

export default ContactForm