import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box 
            align="center"
            opacity={0.4}
            fontSize={14}
            mt='auto'
            mb="32px"
        >
            &copy; {new Date().getFullYear()} Sabrina Touch. All Rights Reserved. 
        </Box>
    )
}

export default Footer