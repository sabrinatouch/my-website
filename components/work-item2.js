import { 
    Box,
    Image
} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import TransitionAnimation from './transitionanimation'

const WorkItem2 = ({ id, thumbnail, title, description }) => {
    return (
        <Box mb={6}>
            <TransitionAnimation>
                <Box> 
                    {title}
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

