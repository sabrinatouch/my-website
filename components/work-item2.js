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
                <Box> 
                    <Text style={{ fontWeight: '800', marginTop: '16px' }}>
                        {title}
                    </Text>
                </Box>
                <Box>
                    {description}
                </Box>
            </TransitionAnimation>
        </Box>
    )
}

export default WorkItem2

