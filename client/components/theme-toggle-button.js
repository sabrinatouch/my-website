import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import MagicWandIcon from './images/magicwand'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        whileHover={{ scale: 1.2, rotate: 90 }}
        whileTap={{ scale: 0.8, borderRadius: "100%" }}
      >
        <IconButton
          aria-label="Toggle theme"
          bg={useColorModeValue('#ffffff', '#202023')}
          icon={useColorModeValue(<MagicWandIcon />, <MagicWandIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton