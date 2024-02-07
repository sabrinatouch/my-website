import { extendTheme, defineStyleConfig } from '@chakra-ui/react'
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
            'section-title': {
                fontSize: 68,
            },
            'sub-title': {
                fontSize: 42,
            },
            'smaller-sub-title': {
                fontSize: 26,
            },
            'smallest-sub-title': {
                fontSize: 20,
            }
        }
    },
    Text: {
        baseStyle: props => ({
            fontSize: 16,
            color: mode('darkGrey', 'alphaWhite.800')(props),
        }),
        variants: {
            'work-item-title': {
                fontWeight: 'semibold',
                mb: '2',
            },
            'sub-title': {
                fontSize: 21,
            },
        }
    },
    Link: {
        baseStyle: props => ({
            fontWeight: 'semibold',
            m: '0px 6px',
            _hover: {
                color: mode('purpleDark', 'purpleLight')(props),
                textDecoration: 'none'
            }
        })
    },
}

const fonts = {
    heading: "'Gabarito'",
    body: "'Gabarito'"
}

const colors = {
    darkGrey: '#2e2e2e',
    purpleLight: '#C09EFF',
    purpleDark: '#4C00FF',
}

const theme = extendTheme({ 
    styles, 
    components, 
    fonts, 
    colors
})

export default theme