import { motion, useTime, useTransform, useAnimate } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { TURBO_TRACE_DEFAULT_MEMORY_LIMIT } from 'next/dist/shared/lib/constants'
import { Texture } from 'three'

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

const TransitionAnimation = ({ children }) => {
    return (
        <StyledDiv
            initial={{
                x: -300
            }}
            whileInView={{
                x: 0,
                transition: {
                    type: "spring",
                    bounce: 0.2,
                    duration: 2,
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

export default TransitionAnimation