import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#ffffff', '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'logo-title': {
                fontSize: 20,
            }
        }
    },
    Text: {
        baseStyle: props => ({
            fontSize: 16,
            color: mode('darkGrey', 'poopyPurple')(props),
        })
    },
    Link: {
        baseStyle: props => ({
            m: '0px 6px',
            _hover: {
                color: 'blue',
            }
        })
    }
}

const fonts = {
    heading: "'Victor Mono'",
}

const colors = {
    darkGrey: '#2e2e2e',
    poopyPurple: '#CDC3FF'
}

const theme = extendTheme({ styles, components, fonts, colors })

export default theme