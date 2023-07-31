import {
    SimpleGrid
} from '@chakra-ui/react'
import WorksItem from './works-item'
import thumbnail_bobatouch from '../public/thumbnail_bobatouch.png'

const WorksContent = () => {
    return (
        <SimpleGrid>
            <WorksItem id={'bobatouch'} thumbnail={thumbnail_bobatouch} title={'Boba Touch'} description={'This is a description'} />
        </SimpleGrid>
    )
}

export default WorksContent