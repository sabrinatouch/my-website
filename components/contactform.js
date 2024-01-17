import { useState } from 'react'
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
    Heading,
    Textarea,
    Text
} from '@chakra-ui/react'
import { sendContactForm } from "../lib/api";

const initValues = { 
    name: "",
    email: "",
    message: ""
};

const initState = { values: initValues };

const ContactForm = () => {
    const [state, setState] = useState(initState);
    const [touched, setTouched] = useState({});
    const { values, isLoading, error } = state;

    const onBlur = ({target}) => setTouched((prev) => ({...prev,
        [target.name]: true
    }))

    const handleChange = ({target}) => setState((prev) => ({
        ...prev, //spread out prev bc if we have other properties on the state object, we want to retain those
        values: {
            ...prev.values,
            [target.name]: target.value,
        }
    }))

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true
        }));
        try {
            await sendContactForm(values);
        } catch (error) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message,
            }));
        }
        
    }

    return (
        <Box pl={4} pr={4}>
            {error && (
                <Text color="red.300" my={4} fontSize="xl">
                    {error}
                </Text>
            )}
            <VStack spacing={4} align="flex-start">
                <FormControl isRequired ininvalid={touched.name && !values.name}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        errorBorderColor="red.300"
                        variant="filled"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
                <FormControl isRequired ininvalid={touched.email && !values.email}>
                    <FormLabel htmlFor="name">Email</FormLabel>
                    <Input
                        id="email"
                        name="email"
                        type="text"
                        errorBorderColor="red.300"
                        variant="filled"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
                <FormControl isRequired ininvalid={touched.message && !values.message}>
                    <FormLabel htmlFor="name">Message</FormLabel>
                    <Textarea
                        id="message"
                        name="message"
                        type="text"
                        variant="filled"
                        errorBorderColor="red.300"
                        rows={4}
                        value={values.message}
                        onChange={handleChange}
                        onBlur={onBlur}
                    />
                    <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
                <Button 
                    type="submit" 
                    colorScheme="purple" 
                    width="full"
                    isLoading={isLoading}
                    disabled={!values.name || !values.email || !values.message}
                    onClick={onSubmit}
                >
                    Send
                </Button>
            </VStack>
        </Box>
    )
}

export default ContactForm