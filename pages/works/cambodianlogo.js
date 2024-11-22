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
            <Box display='flex' justifyContent={'center'}>
                <Box maxWidth='100%' mb={20} p={8} backgroundColor={'whiteAlpha.900'} borderRadius={'40px'} maxW={'6xl'}>
                    <Box mt={8}>
                        <Image
                            src="/banner.jpg"
                            alt={'Cambodian Logo'}
                            width={2000}
                            height={1126}
                            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '15px' }}
                        />
                    </Box>
                    <Box pt={8} pb={16}>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '2', md: '6' }}>
                            <Heading>
                                Cambodian Inspired Logo
                            </Heading>
                            <Text>
                                This logo, representing culture and unity, is inspired by kramas and Khmer kbach in a modern display for a networking conference aiming to foster connections within the Cambodian community to rise and uplift generations old and new.
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
                        <Heading pb={4}>
                            Inspiration
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '6', md: '6' }}>
                            <Text>
                                Khmer (Cambodian) kbach refers to traditional decorative art and ornamental patterns that are used in architecture, sculpture, painting, and various forms of craftwork. The term &quot;kbach&quot; ក្បាច់  means &quot;style&quot; or &quot;pattern&quot; in Khmer, and it is a deeply significant part of Cambodian cultural heritage, often used to adorn temples, royal buildings, and religious objects. Kbach motifs are highly stylized and symbolic, often drawing inspiration from nature and celestial shapes symbolizing harmony, balance, and spirtuality.
                            </Text>
                            <Text>
                                The krama is a traditional and versatile scarf that holds profound cultural significance in Cambodia. Typically made from cotton or silk and featuring a checkered pattern in various colors, the krama serves many purposes: it offers protection from dust and sun, is used to carry goods, and can even be given as a gift of honor, much like a Hawaiian lei. More than just a practical garment, it symbolizes Cambodian identity, heritage, and used by people of all ages and walks of life.
                            </Text>
                        </SimpleGrid>
                    </Box>
                    <Image
                        src="/sketches.gif"
                        alt={'Sketch 1'}
                        width={1920}
                        height={1080}
                        style={{ borderRadius: '15px' }}
                        priority
                    />
                    <Box pt={16} pb={16}>
                        <Heading pb={4}>
                            Typeface
                        </Heading>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '6', md: '6' }}>
                            <Text>
                                PP Agrandir was selected as the primary typeface for its visual similarity to one of Cambodia&apos;s iconic landmark, Angkor Wat. The wide, stretched form of the characters mirrors the temple&apos;s horizontal grandeur, while the combination of curves and straight lines reflects the intricate details of its architecture.
                            </Text>
                            <Text>
                                Additionally, the letter &quot;R&quot; was creatively merged with the Khmer character &quot;រ&quot; which begins the Khmer word for &quot;rise&quot; (រហ) further emphasizing cultural relevance. Noto Sans Khmer was chosen for the Khmer script, as its font weight aligns seamlessly with PP Agrandir, creating a cohesive and streamlined typographic design.
                            </Text>
                        </SimpleGrid>
                    </Box>
                    <SimpleGrid spacing={6}>
                        <Image
                            src="/final7.jpg"
                            alt={'Banner Text'}
                            width={1920}
                            height={1080}
                            style={{ borderRadius: '15px' }}
                        />
                        <Image
                            src="/final2.jpg"
                            alt={'Banner Text'}
                            width={1920}
                            height={1080}
                            style={{ borderRadius: '15px' }}
                        />
                    </SimpleGrid>
                    <Box pt={16} pb={16}>
                        <Heading pb={4}>
                            Colors
                        </Heading> 
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '6', md: '6' }}>   
                            <Text pb={16}>
                                Creating a custom color palette offered limitless possibilities. My goal was to design a palette that both evoked the essence of Cambodian culture and introduced a fresh, modern feel. Orange was chosen as the primary color to symbolize the brand&apos;s themes of rise and match the feiry symbolism of the logo. The secondary color, a deep teal, reflects Cambodia&apos;s lush jungles and nature, while also adding a sense of richness, symbolizing the country&apos;s deep history. This dark teal serves as a backdrop that allows the orange to stand out and glow.
                            </Text>
                            <Image
                                src="/final8.jpg"
                                alt={'Banner Text'}
                                width={960}
                                height={960}
                                style={{ borderRadius: '15px' }}
                            />
                        </SimpleGrid>
                    </Box>
                    <Image
                        src="/banner_text.jpg"
                        alt={'Banner Text'}
                        width={1920}
                        height={1080}
                        style={{ borderRadius: '15px' }}
                    />
                </Box>
            </Box>
        </MainLayout>
    )
}

export default Work;