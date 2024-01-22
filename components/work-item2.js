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
                <Box> 
                    <Text style={{ fontWeight: '800' }}>
                        {title}
                    </Text>
                </Box>
                <Box>
                    {description}
                </Box>
                <Image src={thumbnail} borderRadius='20px'>
                </Image>
            </TransitionAnimation>
        </Box>
    )
}

export default WorkItem2

