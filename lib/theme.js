import { extendTheme, defineStyleConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#fefefc', '#202023')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                fontSize: 84,
            },
            'sub-title': {
                fontSize: 55,
            },
            'smaller-sub-title': {
                fontSize: 36,
            },
            'smallest-sub-title': {
                fontSize: 20,
            }
        }
    },
    Text: {
        baseStyle: props => ({
            fontSize: 16,
            color: mode('mediumGrey', 'alphaWhite.800')(props),
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
                // color: mode('greenDark', 'greenLight')(props),
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
    darkGrey: 'gray.800',
    greenLight: '#68D391',
    greenDark: '#38A169',
}

const theme = extendTheme({ 
    styles, 
    components, 
    fonts, 
    colors
})

export default theme