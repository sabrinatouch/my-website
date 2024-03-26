import { 
    Box, 
    Link, 
    Text, 
    HStack 
} from '@chakra-ui/react'

const Footer = props => {
    return (
        <Box                 
            align="center"
            fontSize={14}
            mt={32}
            mb={16}
        >
            <Box mt={4}>
                <Text>Thanks for stopping by!</Text>
            </Box>
        </Box>
    )
}

export default Footer