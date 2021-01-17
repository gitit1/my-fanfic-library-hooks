import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const Wrapper = (props: any) => {

    return(
        <div className="Wrapper">
            <Header />
            <Main children={props.children} />
            <Footer />
            
        </div>
    )
}

export default Wrapper