import { 
    Box,
    Image,
    Text
} from '@chakra-ui/react'
import TransitionAnimation from './transitionanimation'

const WorkItem2 = ({ id, thumbnail, title, description }) => {
    return (
        <Box mb={6}>
            <TransitionAnimation>
                <Image src={thumbnail} borderRadius='20px'>
                </Image>
                <Box style={{ marginTop: '18px' }}>
                    <Text variant='sub-title' style={{ fontWeight: '600' }}>
                        {title}
                    </Text>
                    <Text style={{ fontSize: '12px' }}>
                        {description}
                    </Text>
                </Box>
            </TransitionAnimation>
        </Box>
    )
}

export default WorkItem2

