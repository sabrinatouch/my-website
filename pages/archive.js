import {
    Text,
    Box,
    chakra
} from '@chakra-ui/react'

const UnderConstruction = () => {
    return (
        <Box display='flex' height='100vh' alignItems='center' justifyContent='center' p={8}>
            <Text fontSize={30}>
                Oops! <br/> This project may no longer be running or available.
            </Text>
        </Box>
    )
}

export default UnderConstruction;