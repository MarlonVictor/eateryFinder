import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../assets/Loader.json';

export default () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData
    }

    return <Lottie options={defaultOptions} />
}