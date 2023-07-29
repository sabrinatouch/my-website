import Chakra from '../components/chakra'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'

function Website({ Component, pageProps, router }) {
    return (
        <Chakra>
            <Fonts />
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </Chakra>
    )
}

export default Website