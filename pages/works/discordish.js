import {
    Box,
    chakra,
    Heading,
    Text,
    SimpleGrid
} from '@chakra-ui/react'
import Image from 'next/image.js'
import MainLayout from '../../components/layouts/main'
import { Link } from '@chakra-ui/react'

const ThumbnailImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
}); 

const DiscordishPage = () => {
    return (
        <MainLayout>
            <Box display='flex' justifyContent={'center'}>
                <Box maxWidth='100%' mb={20} p={8} backgroundColor={'whiteAlpha.900'} borderRadius={'40px'} maxW={'6xl'}>
                    <Box pt={8} pb={16}>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: '2', md: '6' }}>
                            <Heading>
                                Discordish
                                <Link 
                                    href="https://discordish.vercel.app" target="_blank"
                                    style={{ display: 'flex', fontSize: '18px', margin: '0px', color: '#4287f5' }}
                                >
                                    https://discordish.vercel.app
                                </Link>
                            </Heading>
                            <Text>
                                An ongoing project to create a clone of Discord - a communication and messaging application connecting and creating communities online.
                                Implementing features such as real-time messaging, file sharing, reactions, and more on the way.
                                <br/>
                                <br/>Try it out yourself by logging in as a guest. Don&apos;t forget to leave me a message and say hi!
                            </Text>
                        </SimpleGrid>
                    </Box>
                    <Box mb={16}>
                        <Image
                            src="/tb-discordish.jpg"
                            alt={'Discordish Thumbnail'}
                            width={2000}
                            height={1126}
                            style={{ width: '100%', height: 'auto', objectFit: 'cover', borderRadius: '15px' }}
                        />
                    </Box>
                </Box>
            </Box>
        </MainLayout>
    )
}

export default DiscordishPage;