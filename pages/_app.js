import Chakra from '../components/chakra'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { useEffect } from 'react'
import Preloader from '../components/Preloader'
import './preloader.css'

function Website({ Component, pageProps, router }) {
    return (
        <Chakra>
            <Fonts />
            <Layout router={router}>
                <Preloader />
                <Component {...pageProps} key={router.route} />
            </Layout>
        </Chakra>
    )
}

export default Website