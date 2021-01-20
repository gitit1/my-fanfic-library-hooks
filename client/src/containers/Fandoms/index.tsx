import React from 'react';

import SearchSection from './containers/SearchSection'
import ResultsSection from './containers/ResultsSection'
import './Fandoms.scss';

const Fandoms = () => {
    return (
        <div className="Fandoms mainBackgroundClean">
            <SearchSection />
            <ResultsSection />
        </div>
    )
}

export default Fandoms;
