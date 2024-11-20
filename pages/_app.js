import Chakra from '../components/chakra'
import Fonts from '../components/fonts'
import Head from 'next/head'

function Website({ Component, pageProps, router }) {
    return (
        <Chakra>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Fonts />
            <Component {...pageProps} />
        </Chakra>
    )
}

export default Website