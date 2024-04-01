import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations';

const Preloader = () => {
    useEffect(() => {
        preLoaderAnim()
    }, []);

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>Developer,</span>
                <span>Curator,</span>
                <span>Vibes.</span>
            </div>
                    {/* <Box bgColor="#161516" width="100%" height="100vh" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <SpringAnimation>
            <Image src="/favicon.png" width="108px" height="108px" borderRadius="64px" />
            <Text color="white" mt={8} style={{ fontSize: '26px', fontWeight: '500' }}>
              loading...
            </Text>
          </SpringAnimation>
        </Box> */}
        </div>
    )
}

export default Preloader