import { 
    Box,
} from '@chakra-ui/react'

const WorkItem2 = () => {
    return (
        <Box mb={6}>
            <Box display={{ md: 'flex' }}>
                <Box w={{ md: '50%', base: '100%' }} h='360px' backgroundColor={'gray.100'}> 
                    Thumbnail Title
                </Box>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    caption here
                </Box>
            </Box>
        </Box>
    )
}

export default WorkItem2

