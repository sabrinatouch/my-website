import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box 
            align="center"
            opacity={0.4}
            fontSize={14}
            mt={16}
            mb={16}
        >
            {/* &copy; {new Date().getFullYear()} Sabrina Touch. All Rights Reserved.  */}
            Thanks for stopping by!
        </Box>
    )
}

export default Footer