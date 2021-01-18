import React from 'react';

import FirstSection from './containers/FirstSection'
import MiddleSection from './containers/MiddleSection'
import LastSection from './containers/LastSection'

import './Index.scss'

const Index = () => {
    return (
        <div className="Index">
            <FirstSection />
            <MiddleSection />
            <LastSection />

        </div>
    )
}

export default Index
