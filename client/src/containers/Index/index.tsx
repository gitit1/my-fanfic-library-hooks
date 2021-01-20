import React from 'react';

import IntruductionSection from './containers/IntruductionSection';
import DescriptionSection from './containers/DescriptionSection';
import OurFandomsSection from './containers/OurFandomsSection';

import './Index.scss'

const Index = () => {
    return (
        <div className="Index mainBackgroundWithRainBow">
            <IntruductionSection />
            <DescriptionSection />
            <OurFandomsSection />
        </div>
    )
}

export default Index
