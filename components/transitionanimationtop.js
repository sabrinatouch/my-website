import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const TransitionAnimationTop = ({ children }) => {
    return (
        <StyledDiv
            initial={{
                y: -300
            }}
            animate={{
                y: 0,
                transition: {
                    type: "easeIn",
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

export default TransitionAnimationTop