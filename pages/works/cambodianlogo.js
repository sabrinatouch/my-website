import {
    Box,
    chakra,
    Heading,
    Text
} from '@chakra-ui/react'
import Image from 'next/image'
import MainLayout from '../../components/layouts/main'

const ThumbnailImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
}); 

const Work = () => {
    return (
        <MainLayout>
            <Box maxWidth='100%' height='20vh' align="center" mt={18} mb={20}>
                <Image
                    src="/banner.jpg"
                    alt={'Cambodian Logo'}
                    width={2800}
                    height={2100}
                    style={{ borderRadius: '15px' }}
                />
                <Heading>
                    Cambodian Inspired Logo
                </Heading>
                <Text>
                    This is a text box.
                </Text>
            </Box>
        </MainLayout>
    )
}

export default Work;