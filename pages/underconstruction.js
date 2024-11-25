import {
    Text,
    Box,
    chakra
} from '@chakra-ui/react'

const UnderConstruction = () => {
    return (
        <Box display='flex' height='100vh' alignItems='center' justifyContent='center' p={8}>
            <Text fontSize={30}>
                Sorry! <br/> This page is under code-struction.
            </Text>
        </Box>
    )
}

export default UnderConstruction;