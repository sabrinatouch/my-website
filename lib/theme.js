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
            color: mode('darkGrey', 'alphaWhite.800')(props),
        })
    },
    Link: {
        baseStyle: props => ({
            m: '0px 6px',
            _hover: {
                color: mode('blue', 'poopyPurple')(props),
                textDecoration: 'none'
            }
        })
    }
}

const fonts = {
    heading: "'Victor Mono'",
}

const colors = {
    darkGrey: '#2e2e2e',
    poopyPurple: '#C09EFF'
}

const theme = extendTheme({ styles, components, fonts, colors })

export default theme