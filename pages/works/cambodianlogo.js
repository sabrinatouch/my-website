import {
    Box,
    chakra,
    Heading,
    Text,
    SimpleGrid
} from '@chakra-ui/react'
import Image from 'next/image'
import MainLayout from '../../components/layouts/main'

const ThumbnailImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
}); 

const Work = () => {
    return (
        <MainLayout>
            <Box maxWidth='100%' pt={32} mb={20}>
                <Image
                    src="/banner.jpg"
                    alt={'Cambodian Logo'}
                    width={2000}
                    height={1126}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '15px' }}
                />
                <Box pt={16} pb={16}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '2', md: '6' }}>
                        <Heading>
                            Cambodian Inspired Logo
                        </Heading>
                        <Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </SimpleGrid>
                </Box>
                <Image
                    src="/moodboard.jpg"
                    alt={'Moodboard'}
                    width={2000}
                    height={1126}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '15px' }}
                />
                <Box pt={16} pb={16}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '2', md: '6' }}>
                        <Text>
                            <Heading fontSize={'xl'} pb={4}>
                                Inspiration
                            </Heading>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                        <Text>
                            <Heading fontSize={'xl'} pb={4}>
                                Title
                            </Heading>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </SimpleGrid>
                    <Image
                        src="/sketch1.png"
                        alt={'Sketch 1'}
                        width={400}
                        height={300}
                        style={{ borderRadius: '15px' }}
                    />
                </Box>
            </Box>
        </MainLayout>
    )
}

export default Work;