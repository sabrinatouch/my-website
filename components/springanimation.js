import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const SpringAnimation = ({ children }) => {
    return (
        <StyledDiv
            initial={{
                y: 50,
                opacity: 0
            }}
            animate={{ 
                y: 0,
                opacity: 1
            }}
            transition={{ 
                duration: 0.5,
            }}
        >
            {children}
        </StyledDiv>
    );
}

export default SpringAnimation