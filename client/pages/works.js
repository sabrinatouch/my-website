// ARCHIVE

import {
    Container,
    Text,
    Box,
    Heading,
    SimpleGrid
} from '@chakra-ui/react'
import Section from '../components/section'
import WorksItem from '../components/works-item'

import thumbnail_bobatouch from '../public/thumbnail_bobatouch.png'
import thumbnail_placeholder from '../public/thumbnail_placeholder.png'

const Works = () => {
    return (
        <Box>
            <Section delay={0.1}>
                <Heading variant='section-title' letterSpacing={'tighter'}>
                    Works
                </Heading>
                <SimpleGrid>
                    <WorksItem id={'bobatouch'} thumbnail={thumbnail_bobatouch} title={'Boba Touch'} description={'This is a description'} />
                    <WorksItem id={'placeholder'} thumbnail={thumbnail_placeholder} title={'Placeholder Work'} description={'This is a description'} />
                </SimpleGrid>
            </Section>
        </Box>
    )
}

export default Works