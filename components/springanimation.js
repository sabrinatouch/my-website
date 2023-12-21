import { motion, useTime, useTransform, useAnimate } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const SpringAnimation = ({ children }) => {
    const time = useTime()
    const [scope, animate] = useAnimate()
    const rotate = useTransform(
        time,
        [0, 4000], // For every 4 seconds...
        [0, 360], // ...rotate 360deg
        { clamp: false }
    )

    return (
        <StyledDiv
            animate={{ y: 15 }}
            transition={{
                delay: 0,
                duration: 1.5,
                ease: [.35, .17, .3, 1],
                repeat: Infinity,
                repeatType: "mirror",
            }}
        >
            {children}
        </StyledDiv>
    );
}

export default SpringAnimation