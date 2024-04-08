import {
    Text,
    Box,
    Heading,
    UnorderedList,
    ListItem,
    SimpleGrid,
    chakra
} from '@chakra-ui/react'
import Image from 'next/image'
import Section from '../../components/section'

const ThumbnailImage = chakra(Image, {
    shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop)
}); 

const Work = () => {
    return (
        <Box align="center">
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