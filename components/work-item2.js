import { 
    Box,
    Image
} from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import TransitionAnimation from './transitionanimation'

const WorkItem2 = ({ id, thumbnail, title, description }) => {
    return (
        <Box mb={6}>
            <Box display={{ md: 'flex' }}>
                <TransitionAnimation>
                    <Box w={{ md: '50%', base: '100%' }} h='360px' borderRadius='10px'> 
                        {title}
                        <Image src={thumbnail}></Image>
                    </Box>
                </TransitionAnimation>
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                    {description}
                </Box>
            </Box>
        </Box>
    )
}

export default WorkItem2

