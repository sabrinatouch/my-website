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
import Section from '../components/section'

const ThumbnailImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
}); 

const WorksItem = ({ id, thumbnail, title, description }) => {
    return (
        <Box>
            <LinkBox as={NextLink} href={`/works/${id}`}>
            <Card variant={'unstyled'}>
                <VStack spacing={4}>
                    <Section delay={0.2}>
                        <ThumbnailImage 
                            src={thumbnail}
                            alt={title}
                            width={1920}
                            height={'auto'}
                        />
                    </Section>
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

