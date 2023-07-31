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
    LinkBox
} from '@chakra-ui/react'
import Image from 'next/image'

const WorksItem = ({ id, thumbnail, title, description }) => {
    return (
        <Box>
            <LinkBox as={NextLink} href={`/works/${id}`}>
            <Card variant={'unstyled'}>
                <VStack spacing={4}>
                    <Image 
                        src={thumbnail}
                        alt={title}
                    />
                    <CardBody alignSelf={'flex-start'}>
                        <Text variant='work-item-title'>
                            {title}
                        </Text>
                        <Text>
                            {description}
                        </Text>
                    </CardBody>
                </VStack>
            </Card>
            </LinkBox>
            <Divider mt={8} mb={8} />
        </Box>
    )
}

export default WorksItem

