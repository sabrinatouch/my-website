import {
    Box,
    chakra
} from '@chakra-ui/react'
import Image from 'next/image'

const ThumbnailImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
}); 

const Work = () => {
    return (
        <Box maxWidth='100%' align="center" mt={18} mb={20}>
            <Image
                src="/cambodianlogo1.png"
                alt={'Cambodian Logo'}
                width={800}
                height={800}
            />
        </Box>
    )
}

export default Work;