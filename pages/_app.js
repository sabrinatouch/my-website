import Chakra from '../components/chakra'
import Fonts from '../components/fonts'

function Website({ Component, pageProps, router }) {
    return (
        <Chakra>
            <Fonts />
            <Component {...pageProps} />
        </Chakra>
    )
}

export default Website