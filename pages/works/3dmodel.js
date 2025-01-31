import {
    Text,
    Box,
    Heading,
    UnorderedList,
    ListItem,
    SimpleGrid,
    chakra
} from '@chakra-ui/react'
import Image from 'next/image.js'
import Section from '../../components/section'

const ThumbnailImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
}); 

const Work = () => {
    return (
        <Box>
            <Section delay={0.1}>
                <Box mt={8} mb={8} align="center">
                    <Image
                        src="/tb-3dmodel.png"
                        alt={'Boba Touch'}
                        width={1920}
                        height={1280}
                    />
                </Box>
                <Box>
                <Heading variant='section-title' letterSpacing={'tighter'}>
                    3D Model
                </Heading>
                <Text>
                    This is a description
                </Text>
                </Box>
                <SimpleGrid columns={[1, null, 2]}>
                <Box>
                <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                </Box>
                <Box>
                    <UnorderedList>
                        <ListItem>
                            test
                        </ListItem>
                        <ListItem>
                            test
                        </ListItem>
                        <ListItem>
                            test
                        </ListItem>
                    </UnorderedList>
                </Box>
                </SimpleGrid>
            </Section>
        </Box>
    )
}

export default Work;