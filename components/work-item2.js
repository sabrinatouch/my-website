import NextLink from 'next/link'
import { 
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter,
    Text,
    Heading,
    Box,
    VStack,
    Divider,
    LinkBox,
    chakra
} from '@chakra-ui/react'
import Image from 'next/image'

const WorkItem2 = () => {
    return (
        <Box mb={6}>
            <Box display={{ md: 'flex' }}>
            <Box w={{ md: '50%', base: '100%' }} h='360px' backgroundColor={'gray'}> 
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

