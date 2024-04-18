import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations';

const Preloader = () => {
    useEffect(() => {
        preLoaderAnim()
    }, []);

    return (
        <div className="preloader">
            <div className="texts-container">
                <span>
                    🍵
                </span>
                <span>
                    👩🏻‍💻
                </span>
                <span>
                    🌾
                </span>
            </div>
        </div>
    )
}

export default Preloader