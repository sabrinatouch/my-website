import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const TransitionAnimationBottom = ({ children }) => {
    return (
        <StyledDiv
            initial={{
                y: 50
            }}
            animate={{
                y: 0,
                transition: {
                    type: "fadeIn",
                    duration: 2.5,
                }
            }}
            viewport={{
                once: true
            }}
        >
            {children}
        </StyledDiv>
    );
}

export default TransitionAnimationBottom