import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const HoverAnimation = ({ children }) => {
    return (
        <StyledDiv
            whileHover={{ scale: 1.025 }}
        >
            {children}
        </StyledDiv>
    );
}

export default HoverAnimation